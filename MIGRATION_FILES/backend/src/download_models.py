"""
Utility to download model files from direct HTTP URLs or GitHub using git-lfs if they don't exist locally.
This is used for deployment environments like Render where models aren't in the repo.

Supports downloading from:
1. Direct HTTP URLs (set via environment variables)
2. GitHub LFS (fallback if URLs not provided)
"""

import os
import subprocess
import shutil
from pathlib import Path
from typing import Optional, Dict
import logging
import requests

logger = logging.getLogger(__name__)

# GitHub repository details
GITHUB_USER = "alphactor19a"
GITHUB_REPO = "ethoscore-models"
GITHUB_BRANCH = "main"
REPO_URL = f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}.git"

# Model files to download
MODEL_FILES = [
    "ordinal_model_best_checkpoint.safetensors",
    "3class_model_best_checkpoint.safetensors",
    "Dataset-framing_annotations-Llama-3.3-70B-Instruct-Turbo.csv",
]

# Environment variable names for direct download URLs
# Set these in Render: MODEL_BASE_URL or individual MODEL_URL_* variables
MODEL_BASE_URL_ENV = "MODEL_BASE_URL"
MODEL_URL_ENV_PREFIX = "MODEL_URL_"


def ensure_models_downloaded(base_dir: Optional[str] = None) -> bool:
    """
    Ensure all required model files exist locally, downloading from direct URLs or GitHub using git-lfs if needed.
    
    Args:
        base_dir: Base directory to check/download models to. Defaults to current directory.
        
    Returns:
        True if all files exist or were successfully downloaded, False otherwise
    """
    if base_dir is None:
        base_dir = os.getcwd()
    
    base_path = Path(base_dir)
    
    # Check if all files already exist
    all_exist = all((base_path / filename).exists() for filename in MODEL_FILES)
    if all_exist:
        logger.info("All model files already exist locally")
        return True
    
    # Try direct HTTP downloads first (if URLs are configured)
    if _download_models_via_http(base_path):
        return True
    
    # Fall back to git-lfs (may fail if LFS budget exceeded)
    logger.warning("Direct HTTP download failed or not configured. Trying Git LFS...")
    return _download_models_with_git_lfs(base_path)


def _get_download_urls() -> Optional[Dict[str, str]]:
    """
    Get download URLs from environment variables.
    
    Returns:
        Dictionary mapping filename to URL, or None if not configured
    """
    urls = {}
    
    # Check for base URL (files will be at BASE_URL/filename)
    base_url = os.getenv(MODEL_BASE_URL_ENV)
    if base_url:
        base_url = base_url.rstrip('/')
        for filename in MODEL_FILES:
            urls[filename] = f"{base_url}/{filename}"
        print(f"[download_models] Using base URL: {base_url}")
        logger.info(f"Using base URL: {base_url}")
        return urls
    
    # Check for individual file URLs (MODEL_URL_ordinal_model_best_checkpoint.safetensors, etc.)
    for filename in MODEL_FILES:
        env_var = f"{MODEL_URL_ENV_PREFIX}{filename.upper().replace('.', '_').replace('-', '_')}"
        url = os.getenv(env_var)
        if url:
            urls[filename] = url
            print(f"[download_models] Found URL for {filename}")
        else:
            print(f"[download_models] Environment variable {env_var} not set for {filename}")
    
    if urls:
        print(f"[download_models] Found {len(urls)}/{len(MODEL_FILES)} model URLs in environment variables")
        logger.info(f"Found {len(urls)} model URLs in environment variables")
        return urls
    
    print("[download_models] No model URLs found in environment variables")
    return None


def _download_models_via_http(base_path: Path) -> bool:
    """
    Download model files via direct HTTP URLs.
    
    Args:
        base_path: Base directory path
        
    Returns:
        True if successful, False otherwise
    """
    print("[download_models] Attempting HTTP download...")
    urls = _get_download_urls()
    if not urls:
        print("[download_models] No URLs configured, HTTP download skipped")
        return False
    
    try:
        all_downloaded = True
        for filename in MODEL_FILES:
            if filename not in urls:
                logger.error(f"No URL configured for {filename}")
                all_downloaded = False
                continue
            
            target_file = base_path / filename
            if target_file.exists():
                logger.info(f"{filename} already exists, skipping download")
                continue
            
            url = urls[filename]
            logger.info(f"Downloading {filename} from {url}...")
            
            try:
                print(f"[download_models] Starting download of {filename} from {url}...")
                
                session = requests.Session()
                response = session.get(url, stream=False, timeout=1800, allow_redirects=True)
                response.raise_for_status()
                
                # Handle Google Drive large file downloads (virus scan warning)
                # Google Drive returns HTML with a form for large files
                content_type = response.headers.get('content-type', '').lower()
                if 'text/html' in content_type or (len(response.content) < 10240 and b'virus' in response.content.lower()):
                    print(f"[download_models] Detected Google Drive virus scan warning, extracting confirmation token...")
                    import re
                    html_content = response.text
                    
                    # Extract the confirmation token from the form
                    # Google Drive uses a form with action and confirm input
                    confirm_match = re.search(r'name="confirm"\s+value="([^"]+)"', html_content)
                    if confirm_match:
                        confirm_token = confirm_match.group(1)
                        # Extract the action URL
                        action_match = re.search(r'id="downloadForm"[^>]*action="([^"]+)"', html_content)
                        if action_match:
                            action_url = action_match.group(1)
                            # Build the confirmation URL
                            if action_url.startswith('/'):
                                confirm_url = f"https://drive.google.com{action_url}&confirm={confirm_token}"
                            else:
                                confirm_url = f"{action_url}&confirm={confirm_token}"
                            print(f"[download_models] Using confirmation URL to download...")
                            response = session.get(confirm_url, stream=True, timeout=1800, allow_redirects=True)
                            response.raise_for_status()
                        else:
                            # Fallback: try with the file ID directly
                            file_id_match = re.search(r'[?&]id=([^&"\']+)', url)
                            if file_id_match:
                                file_id = file_id_match.group(1)
                                confirm_url = f"https://drive.google.com/uc?export=download&id={file_id}&confirm={confirm_token}"
                                print(f"[download_models] Using file ID with confirmation token...")
                                response = session.get(confirm_url, stream=True, timeout=1800, allow_redirects=True)
                                response.raise_for_status()
                    else:
                        raise requests.exceptions.RequestException("Could not extract Google Drive confirmation token. File may require manual download.")
                else:
                    # Not HTML, so it's the actual file - switch to streaming
                    response = session.get(url, stream=True, timeout=1800, allow_redirects=True)
                    response.raise_for_status()
                
                # Download with progress
                total_size = int(response.headers.get('content-length', 0))
                downloaded = 0
                if total_size > 0:
                    print(f"[download_models] File size: {total_size / (1024*1024):.1f} MB")
                else:
                    print(f"[download_models] File size: unknown (streaming)")
                
                with open(target_file, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
                            downloaded += len(chunk)
                            if total_size > 0:
                                percent = (downloaded / total_size) * 100
                                if downloaded % (10 * 1024 * 1024) == 0:  # Log every 10MB
                                    print(f"[download_models] Downloaded {percent:.1f}% of {filename}")
                                    logger.info(f"Downloaded {percent:.1f}% of {filename}")
                
                print(f"[download_models] Successfully downloaded {filename} ({downloaded / (1024*1024):.1f} MB)")
                logger.info(f"Successfully downloaded {filename} ({downloaded / (1024*1024):.1f} MB)")
                
            except requests.exceptions.RequestException as e:
                print(f"[download_models] ERROR: Failed to download {filename} from {url}: {e}")
                logger.error(f"Failed to download {filename} from {url}: {e}")
                if target_file.exists():
                    target_file.unlink()  # Remove partial file
                all_downloaded = False
        
        if all_downloaded:
            print("[download_models] All models downloaded successfully via HTTP")
        else:
            print("[download_models] Some models failed to download via HTTP")
        return all_downloaded
        
    except Exception as e:
        print(f"[download_models] ERROR: Exception during HTTP download: {e}")
        logger.error(f"Error during HTTP download: {e}")
        return False


def _download_models_with_git_lfs(base_path: Path) -> bool:
    """
    Download model files from GitHub using git-lfs.
    
    Args:
        base_path: Base directory path
        
    Returns:
        True if successful, False otherwise
    """
    try:
        # Check if git is available
        result = subprocess.run(['git', '--version'], capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            logger.error("Git is not available. Cannot download models.")
            return False
        
        # Check if git-lfs is available
        result = subprocess.run(['git', 'lfs', 'version'], capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            logger.error("Git LFS is not available. Cannot download models.")
            return False
        
        temp_dir = base_path / ".temp_models_repo"
        
        try:
            logger.info(f"Cloning models repository from {REPO_URL}...")
            
            # Clone the repository
            clone_result = subprocess.run([
                'git', 'clone', '--depth', '1', REPO_URL, str(temp_dir)
            ], capture_output=True, text=True, timeout=600)
            
            if clone_result.returncode != 0:
                logger.error(f"Failed to clone repository: {clone_result.stderr}")
                return False
            
            # Pull LFS files
            logger.info("Pulling LFS files...")
            lfs_result = subprocess.run([
                'git', 'lfs', 'pull'
            ], cwd=temp_dir, capture_output=True, text=True, timeout=1800)  # 30 min timeout for large files
            
            if lfs_result.returncode != 0:
                logger.warning(f"Git LFS pull had issues: {lfs_result.stderr}")
                # Continue anyway, files might still be there
            
            # Copy files to target location
            all_copied = True
            for filename in MODEL_FILES:
                source_file = temp_dir / filename
                target_file = base_path / filename
                
                if source_file.exists():
                    logger.info(f"Copying {filename}...")
                    shutil.copy2(str(source_file), str(target_file))
                    logger.info(f"Successfully copied {filename}")
                else:
                    logger.error(f"File {filename} not found in cloned repository")
                    all_copied = False
            
            # Clean up temp directory
            shutil.rmtree(temp_dir, ignore_errors=True)
            
            if all_copied:
                logger.info("All model files successfully downloaded")
                return True
            else:
                logger.error("Some model files could not be downloaded")
                return False
                
        except subprocess.TimeoutExpired:
            logger.error("Download timed out. Files are large, this may take several minutes.")
            if temp_dir.exists():
                shutil.rmtree(temp_dir, ignore_errors=True)
            return False
        except Exception as e:
            logger.error(f"Error during download: {e}")
            if temp_dir.exists():
                shutil.rmtree(temp_dir, ignore_errors=True)
            return False
        
    except Exception as e:
        logger.error(f"Failed to download models: {e}")
        return False


if __name__ == "__main__":
    # Allow running as a script
    import sys
    base_dir = sys.argv[1] if len(sys.argv) > 1 else None
    success = ensure_models_downloaded(base_dir)
    sys.exit(0 if success else 1)

