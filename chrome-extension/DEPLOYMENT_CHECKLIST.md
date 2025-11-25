# Chrome Web Store Deployment Checklist

## ✅ Pre-Deployment Checklist

### API Deployment
- [x] API deployed to Render: https://ethoscore-extension.onrender.com
- [x] Health endpoint working: https://ethoscore-extension.onrender.com/health
- [x] Extension updated with Render API URL
- [x] Manifest.json updated with Render domain permissions
- [x] CORS configured to allow Chrome extensions

### Extension Files
- [x] Icons present (icon16.png, icon48.png, icon128.png)
- [x] manifest.json configured correctly
- [x] popup.js updated with production API URL
- [x] All required files present

### Testing
- [ ] Test extension locally with production API
- [ ] Verify analysis works on sample articles
- [ ] Test error handling (offline, API errors)
- [ ] Test on different websites

## 📦 Package Extension

### Option 1: Use Package Script
```bash
cd chrome-extension
chmod +x package-for-store.sh
./package-for-store.sh
```

### Option 2: Manual ZIP
```bash
cd chrome-extension
zip -r ../ethoscore-extension-v1.0.0.zip . \
  -x "*.DS_Store" \
  -x "*__pycache__*" \
  -x "*.pyc" \
  -x "*.md" \
  -x "generate_icons*.py" \
  -x "create-icons.html" \
  -x "*.sh"
```

**Required files in ZIP:**
- manifest.json
- popup.html
- popup.css
- popup.js
- background.js
- icons/icon16.png
- icons/icon48.png
- icons/icon128.png

## 🚀 Chrome Web Store Submission

### Step 1: Developer Account
- [ ] Go to https://chrome.google.com/webstore/devconsole
- [ ] Sign in with Google account
- [ ] Pay $5 one-time developer fee (if not already paid)
- [ ] Accept Developer Agreement

### Step 2: Upload Extension
- [ ] Click "New Item"
- [ ] Upload ZIP file
- [ ] Fill in required information

### Step 3: Store Listing

**Required Information:**
- [ ] **Name**: EthoScore (or your preferred name)
- [ ] **Summary**: Short description (132 characters max)
  - Example: "Analyze emotional framing in news articles. Get Neutral, Loaded, or Alarmist classifications with intensity scores."
- [ ] **Description**: Detailed description (up to 16,000 characters)
  - See PUBLISHING_GUIDE.md for template
- [ ] **Category**: Productivity or News
- [ ] **Language**: English (and others if needed)

**Screenshots (Required):**
- [ ] At least 1 screenshot (1280x800 or 640x400)
- [ ] Recommended: 5 screenshots showing:
  1. Extension popup with results
  2. Analyzing a news article
  3. Different framing results
  4. Score visualization
  5. Extension in action

**Privacy:**
- [ ] Privacy Policy URL (required - extension sends data to API)
- [ ] Single Purpose Description
- [ ] Permissions Justification

**Remote Code (Important):**
- [ ] **Answer: NO** - Extension does NOT use remote code
- [ ] **Justification**: See `REMOTE_CODE_JUSTIFICATION.md` for details
  - All code is bundled in extension package
  - Only JSON data is fetched from API (no code execution)
  - Content Security Policy restricts to local code only

### Step 4: Privacy Policy

**You MUST provide a privacy policy** because the extension:
- Sends article text to your API server
- May store user preferences locally

**Privacy Policy Template:**
```
EthoScore Privacy Policy

Data Collection:
- Article text is sent to our API server for analysis
- No personal information is collected
- Article text is processed in real-time and not stored

Data Storage:
- User preferences (API URL) are stored locally in browser
- No data is stored on our servers

Third Parties:
- Article analysis is performed by our API server
- No data is shared with third parties

Contact:
[Your contact email]
```

Host this on:
- GitHub Pages
- Your website
- Privacy policy generator service

### Step 5: Submit for Review
- [ ] Review all information
- [ ] Submit for review
- [ ] Wait for approval (usually 1-3 business days)

## 📋 Post-Deployment

After approval:
- [ ] Monitor API usage and performance
- [ ] Monitor error logs
- [ ] Respond to user reviews
- [ ] Plan updates and improvements

## 🔄 Updates

To update the extension:
1. Update version in manifest.json
2. Test changes
3. Package new ZIP
4. Upload to Chrome Web Store
5. Submit for review

## 📞 Support

- Chrome Web Store Help: https://support.google.com/chrome_webstore
- Developer Forum: https://groups.google.com/a/chromium.org/g/chromium-extensions

