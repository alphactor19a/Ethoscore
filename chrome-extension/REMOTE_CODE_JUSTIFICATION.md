# Remote Code Justification for Chrome Web Store

## Question: Does your extension use remote code?

**Answer: NO**

## Justification

The EthoScore Chrome Extension does **NOT** use remote code. All code execution happens locally within the extension package.

### What the Extension Does:

1. **Local Code Execution Only**
   - All JavaScript code is bundled in the extension package
   - No code is downloaded or executed from remote sources
   - All functions are defined locally in `popup.js` and `background.js`

2. **Data Fetching Only**
   - The extension makes HTTP requests to our API endpoint (`https://ethoscore-extension.onrender.com`)
   - These requests retrieve **JSON data only** (analysis results)
   - The JSON data is displayed using standard DOM manipulation
   - No code is executed from the API response

3. **Content Script Injection**
   - Uses `chrome.scripting.executeScript()` to inject a locally defined function
   - The `extractPageContent()` function is defined in the extension's `popup.js`
   - This function extracts article text from the current webpage
   - No remote code is involved in this process

### Technical Details:

**Code Analysis:**
- ✅ No use of `eval()`
- ✅ No use of `Function()` constructor
- ✅ No use of `document.write()`
- ✅ No dynamic script loading
- ✅ No remote script execution
- ✅ Content Security Policy: `script-src 'self'; object-src 'self'` (restricts to local code only)

**Remote Interactions:**
- Only `fetch()` API calls to retrieve JSON data
- API endpoint: `https://ethoscore-extension.onrender.com`
- Purpose: Retrieve article analysis results (data, not code)
- Data format: JSON response containing analysis results

### Architecture:

```
Extension (Local Code)
    ↓
Extract article text (local function)
    ↓
Send to API via fetch() (data only)
    ↓
Receive JSON response (data only)
    ↓
Display results (local DOM manipulation)
```

### Compliance:

This extension complies with Chrome Web Store policies:
- **No remote code execution** - All code is bundled in the extension
- **Data-only API calls** - Only JSON data is retrieved from remote server
- **Strict CSP** - Content Security Policy prevents remote code execution
- **Standard APIs** - Uses only standard Chrome Extension APIs and fetch()

## Conclusion

The extension does NOT use remote code. It only fetches data from a remote API endpoint. All code execution happens locally within the extension package, making it compliant with Chrome Web Store policies regarding remote code.

