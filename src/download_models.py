"""
Utility to download model files from GitHub using git-lfs if they don't exist locally.
This is used for deployment environments like Render where models aren't in the repo.
"""

import os
import subprocess
import shutil
from pathlib import Path
from typing import Optional
import logging

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


def ensure_models_downloaded(base_dir: Optional[str] = None) -> bool:
    """
    Ensure all required model files exist locally, downloading from GitHub using git-lfs if needed.
    
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
    
    # Try to download using git-lfs
    return _download_models_with_git_lfs(base_path)


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

