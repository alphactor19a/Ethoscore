# Render Deployment Guide

This guide will help you deploy the Ethoscore API backend to Render.

## Prerequisites

1. **GitHub Repository**: Your code must be in a GitHub repository
2. **Render Account**: Sign up at https://render.com (free tier available)
3. **Model Files**: Ensure model files are committed to your repository:
   - `ordinal_model_best_checkpoint.safetensors`
   - `3class_model_best_checkpoint.safetensors`
   - `Dataset-framing_annotations-Llama-3.3-70B-Instruct-Turbo.csv` (optional, for `/explore/topic` endpoint)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. **Push to GitHub**: Make sure your code (including `render.yaml`) is pushed to GitHub

2. **Create New Web Service**:
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account if not already connected
   - Select your repository

3. **Configure Service**:
   - Render will automatically detect `render.yaml` and use those settings
   - Service name: `ethoscore-api` (or your preferred name)
   - Region: Choose closest to your users

4. **Deploy**:
   - Click "Create Web Service"
   - Render will start building and deploying
   - First deployment may take 10-15 minutes (installing dependencies and loading models)

5. **Get Your URL**:
   - Once deployed, you'll get a URL like: `https://ethoscore-api.onrender.com`
   - Test it: `https://ethoscore-api.onrender.com/health`

### Option 2: Manual Configuration

If you prefer to configure manually:

1. **Create New Web Service**:
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Settings**:
   - **Name**: `ethoscore-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn api.main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: Choose `Free` (for testing) or `Starter` (for production)

3. **Environment Variables** (Optional):
   - `PYTHON_VERSION`: `3.11.0`
   - `PORT`: `10000` (Render sets this automatically, but you can specify)

4. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete

## Important Notes

### Model Files Size

- Model files are large (~50-100MB each)
- **Free tier limit**: 100MB total deployment size
- **Solution**: Use `Starter` plan ($7/month) for larger deployments, or use external storage (S3, etc.)

### Cold Starts

- Render free tier services spin down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds (model loading)
- Consider `Starter` plan for always-on service

### Health Check

The service includes a `/health` endpoint that Render uses to verify the service is running:
- Endpoint: `https://your-service.onrender.com/health`
- Returns: `{"ok": true, "models": {...}, "dataset_loaded": false}`

## After Deployment

### 1. Test Your API

```bash
# Health check
curl https://your-service.onrender.com/health

# Test analysis
curl -X POST https://your-service.onrender.com/analyze/text \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Article", "body": "This is a test article body."}'
```

### 2. Update Chrome Extension

Update `chrome-extension/popup.js` with your Render URL:

```javascript
const DEFAULT_API_URL = 'https://your-service.onrender.com';
```

### 3. Update CORS (if needed)

The API already allows all origins (`*`), which works for Chrome extensions. If you want to restrict it:

```python
allow_origins=[
    "chrome-extension://*",  # All Chrome extensions
    "https://your-frontend-domain.com",
]
```

## Troubleshooting

### Build Fails

- **Check logs**: Go to your service → "Logs" tab
- **Common issues**:
  - Missing dependencies in `requirements.txt`
  - Python version mismatch
  - Model files not found (check file paths)

### Service Won't Start

- **Check startup logs**: Look for model loading errors
- **Verify model files**: Ensure they're in the repository root
- **Check port**: Make sure using `$PORT` environment variable

### Slow Response Times

- **First request**: Normal (model loading takes 30-60 seconds)
- **Subsequent requests**: Should be fast (< 5 seconds)
- **Cold starts**: Free tier services spin down after inactivity

### Out of Memory

- **Free tier**: 512MB RAM (may not be enough for large models)
- **Solution**: Upgrade to `Starter` plan (512MB) or `Standard` plan (2GB)

## Monitoring

- **Logs**: View real-time logs in Render dashboard
- **Metrics**: Monitor CPU, memory, and response times
- **Alerts**: Set up email alerts for service failures

## Cost Estimate

- **Free Tier**: $0/month (with limitations)
- **Starter Plan**: $7/month (always-on, more resources)
- **Standard Plan**: $25/month (better performance)

## Next Steps

1. ✅ Deploy to Render
2. ✅ Test API endpoints
3. ✅ Update Chrome extension with new API URL
4. ✅ Test extension with deployed API
5. ✅ Monitor service health and performance

## Support

- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
- Service Logs: Available in Render dashboard

