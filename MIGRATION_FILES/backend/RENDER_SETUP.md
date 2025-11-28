# Render Deployment Setup

This backend requires model files (~1.3GB total) that need to be downloaded on startup.

## Model Files

The model files are:
- `ordinal_model_best_checkpoint.safetensors`
- `3class_model_best_checkpoint.safetensors`
- `Dataset-framing_annotations-Llama-3.3-70B-Instruct-Turbo.csv`

## Recommended: Direct HTTP Downloads (Avoids Git LFS Limits)

**GitHub LFS has bandwidth limits that can be exceeded.** Use direct HTTP downloads instead.

### Step 1: Upload Models to Cloud Storage

Upload your model files to a cloud storage service that provides direct download links:

**Option A: Google Drive**
1. Upload files to Google Drive
2. Right-click each file → "Get link" → Set to "Anyone with the link"
3. Convert to direct download URL: `https://drive.google.com/uc?export=download&id=FILE_ID`
   - Get FILE_ID from the share link: `https://drive.google.com/file/d/FILE_ID/view`

**Option B: Dropbox**
1. Upload files to Dropbox
2. Right-click → "Copy link"
3. Replace `www.dropbox.com` with `dl.dropboxusercontent.com` in the URL
4. Remove `?dl=0` and add `?dl=1` if present

**Option C: AWS S3 / Google Cloud Storage / Azure Blob**
- Upload files and make them publicly readable
- Use the public URL

### Step 2: Set Environment Variables in Render

Go to **Render Dashboard → Your Service → Environment** and add:

**Option 1: Base URL (Recommended)**
```
MODEL_BASE_URL=https://your-storage-service.com/models
```
Files will be downloaded from:
- `https://your-storage-service.com/models/ordinal_model_best_checkpoint.safetensors`
- `https://your-storage-service.com/models/3class_model_best_checkpoint.safetensors`
- `https://your-storage-service.com/models/Dataset-framing_annotations-Llama-3.3-70B-Instruct-Turbo.csv`

**Option 2: Individual URLs**
```
MODEL_URL_ORDINAL_MODEL_BEST_CHECKPOINT_SAFETENSORS=https://...
MODEL_URL_3CLASS_MODEL_BEST_CHECKPOINT_SAFETENSORS=https://...
MODEL_URL_DATASET_FRAMING_ANNOTATIONS_LLAMA_3_3_70B_INSTRUCT_TURBO_CSV=https://...
```

### Step 3: Build Command

Add this to your **Build Command** in Render:

```bash
apt-get update && apt-get install -y git-lfs && git lfs install && pip install -r requirements.txt
```

(Note: Git LFS is still installed as a fallback, but won't be used if HTTP URLs are configured)

## Alternative: GitHub LFS (Fallback)

If you prefer to use GitHub LFS (may hit bandwidth limits):

The model files are stored in: https://github.com/alphactor19a/ethoscore-models

No environment variables needed - the app will try Git LFS if HTTP URLs aren't configured.

### 3. Start Command

Use:

```bash
uvicorn api.main:app --host 0.0.0.0 --port $PORT
```

### 4. Build Timeout

The build may take longer due to downloading large model files. Ensure your Render plan allows sufficient build time (free tier has 45 min limit).

### 5. Runtime Memory

The models require significant memory. Ensure your Render service plan has at least 2GB RAM.

## How It Works

1. On startup, the application checks if model files exist locally
2. If not found, it tries to download via HTTP (if URLs are configured in environment variables)
3. If HTTP fails or URLs aren't configured, it falls back to cloning the `ethoscore-models` repository using git-lfs
4. Model files are saved to the backend directory
5. The analyzer initializes with the downloaded models

## Troubleshooting

### "Models not loaded" Error

1. **Check Render logs** for download errors
2. **Verify environment variables** are set correctly (if using HTTP downloads)
3. **Test download URLs** - make sure they're publicly accessible and return the file (not a redirect page)
4. **Check disk space** - models are ~1.3GB total
5. **Verify git-lfs is installed** (check build logs) - only needed if using Git LFS fallback

### "Repository exceeded its LFS budget" Error

This means GitHub LFS bandwidth limit was exceeded. **Solution:**
- Use direct HTTP downloads instead (see Step 1-2 above)
- Upload models to Google Drive, Dropbox, or another cloud storage service
- Set the `MODEL_BASE_URL` environment variable in Render

### Download Timeout

Large files may take 10-30 minutes to download. If you see timeouts:
- Use a faster CDN/storage service
- Check your Render service plan (free tier has limits)
- Consider using a service with better bandwidth (S3, CloudFront, etc.)

