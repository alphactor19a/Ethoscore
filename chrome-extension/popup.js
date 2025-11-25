// Ethoscore Chrome Extension - Main Script

// Default API URL
// Production API deployed on Render
// The extension sends article text to this API, which runs the ML models
const DEFAULT_API_URL = 'https://ethoscore-extension.onrender.com';

// Initialize extension
async function initializeExtension() {
    // Load saved API URL
    const saved = await chrome.storage.local.get(['apiUrl']);
    const apiUrl = saved.apiUrl || DEFAULT_API_URL;
    
    // Check API health
    await checkApiHealth(apiUrl);
}

// Get API URL from storage
async function getApiUrl() {
    const saved = await chrome.storage.local.get(['apiUrl']);
    return saved.apiUrl || DEFAULT_API_URL;
}

// Check API health
async function checkApiHealth(apiUrl) {
    try {
        const response = await fetch(`${apiUrl}/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Analyze current page (auto-run on popup open)
async function analyzeCurrentPage() {
    const apiUrl = await getApiUrl();
    
    try {
        showLoading(true);
        hideError();
        hideResults();
        
        // Get current tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // Check if we can access this page
        if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('edge://')) {
            throw new Error('Cannot analyze Chrome internal pages. Please navigate to a regular webpage.');
        }
        
        // Check if URL is accessible (http/https)
        if (!tab.url.startsWith('http://') && !tab.url.startsWith('https://')) {
            throw new Error('Cannot analyze this type of page. Please navigate to a webpage with http:// or https:// URL.');
        }
        
        // Inject content script to extract article content
        let results;
        try {
            results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: extractPageContent
            });
        } catch (scriptError) {
            // Handle permission errors
            if (scriptError.message && scriptError.message.includes('permission')) {
                throw new Error('Permission denied. Please reload the extension and try again.');
            }
            throw new Error(`Failed to access page content: ${scriptError.message}`);
        }
        
        const content = results[0].result;
        
        if (!content.title && !content.body) {
            throw new Error('Could not extract article content from page. The page may not contain readable article content.');
        }
        
        // Analyze the extracted content
        const response = await fetch(`${apiUrl}/analyze/text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: content.title || 'Untitled',
                body: content.body || ''
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}`);
        }
        
        const analysisResults = await response.json();
        displayResults(analysisResults);
        
    } catch (error) {
        showError(`Failed to analyze page: ${error.message}`);
    } finally {
        showLoading(false);
    }
}

// Extract content from current page (injected script)
function extractPageContent() {
    // Try to find article title
    let title = '';
    const titleSelectors = [
        'h1',
        'article h1',
        '[role="article"] h1',
        '.article-title',
        '.post-title',
        'meta[property="og:title"]'
    ];
    
    for (const selector of titleSelectors) {
        const element = document.querySelector(selector);
        if (element) {
            if (selector.startsWith('meta')) {
                title = element.getAttribute('content') || '';
            } else {
                title = element.textContent.trim();
            }
            if (title) break;
        }
    }
    
    // Try to find article body
    let body = '';
    const bodySelectors = [
        'article',
        '[role="article"]',
        '.article-body',
        '.post-content',
        '.entry-content',
        'main article',
        'main'
    ];
    
    for (const selector of bodySelectors) {
        const element = document.querySelector(selector);
        if (element) {
            // Remove script and style elements
            const clone = element.cloneNode(true);
            const scripts = clone.querySelectorAll('script, style, nav, footer, header, aside');
            scripts.forEach(el => el.remove());
            body = clone.textContent.trim();
            if (body.length > 100) break; // Need substantial content
        }
    }
    
    // Fallback: get all text content
    if (!body) {
        const bodyEl = document.body.cloneNode(true);
        const scripts = bodyEl.querySelectorAll('script, style, nav, footer, header, aside');
        scripts.forEach(el => el.remove());
        body = bodyEl.textContent.trim();
    }
    
    return { title, body };
}

// Display results in digestible format
function displayResults(results) {
    // Show results section
    document.getElementById('resultsSection').style.display = 'block';
    
    // Article info
    const title = results.title || 'Untitled Article';
    document.getElementById('resultTitle').textContent = title;
    
    const metaParts = [];
    if (results.source) metaParts.push(`Source: ${results.source}`);
    if (results.publish_date) metaParts.push(`Published: ${results.publish_date.substring(0, 10)}`);
    if (results.body_length) metaParts.push(`${results.body_length} characters`);
    
    document.getElementById('resultMeta').textContent = metaParts.join(' • ') || 'No metadata available';
    
    // Get main results
    const ordinal = results.ordinal_analysis || {};
    const classification = results.classification_analysis || {};
    
    // Determine main framing (prefer ordinal model)
    const mainFraming = ordinal.predicted_label || classification.predicted_label || 'Unknown';
    const mainConfidence = ordinal.confidence || classification.confidence || 0;
    const normalizedScore = ordinal.normalized_score || 0;
    
    // Display main result badge
    document.getElementById('mainFraming').textContent = mainFraming;
    document.getElementById('mainBadge').className = `result-badge ${mainFraming.toLowerCase()}`;
    
    // Main explanation
    const explanation = getFramingExplanation(mainFraming, normalizedScore);
    document.getElementById('mainExplanation').textContent = explanation;
    
    // Score display
    document.getElementById('intensityScore').textContent = normalizedScore.toFixed(0);
    const scoreBar = document.getElementById('scoreBar');
    scoreBar.style.width = `${normalizedScore}%`;
    scoreBar.className = `score-bar ${getScoreColorClass(normalizedScore)}`;
    
    // Score interpretation
    document.getElementById('scoreInterpretation').textContent = ordinal.score_interpretation || getScoreInterpretation(normalizedScore);
    
    // Classification model results
    document.getElementById('classLabel').textContent = classification.predicted_label || 'N/A';
    const classProbs = document.getElementById('classProbabilities');
    classProbs.innerHTML = '';
    if (classification.all_probabilities) {
        Object.entries(classification.all_probabilities).forEach(([label, prob]) => {
            const probItem = createProbabilityItem(label, prob);
            classProbs.appendChild(probItem);
        });
    }
    
    // Ordinal model results
    document.getElementById('ordinalLabel').textContent = ordinal.predicted_label || 'N/A';
    const ordinalProbs = document.getElementById('ordinalProbabilities');
    ordinalProbs.innerHTML = '';
    if (ordinal.all_probabilities) {
        Object.entries(ordinal.all_probabilities).forEach(([label, prob]) => {
            const probItem = createProbabilityItem(label, prob);
            ordinalProbs.appendChild(probItem);
        });
    }
}

// Get framing explanation
function getFramingExplanation(framing, score) {
    const explanations = {
        'neutral': 'This article presents information in a balanced, factual manner without emotional manipulation or alarmist language.',
        'loaded': 'This article uses emotionally charged language and framing to influence reader perception while maintaining some factual basis.',
        'alarmist': 'This article uses extreme language, fear-based messaging, and sensationalism to provoke strong emotional reactions.'
    };
    
    return explanations[framing.toLowerCase()] || 'Unable to determine framing style.';
}

// Get score interpretation
function getScoreInterpretation(score) {
    if (score < 33) {
        return 'Low emotional intensity - relatively neutral presentation';
    } else if (score < 66) {
        return 'Moderate emotional intensity - some loaded language present';
    } else {
        return 'High emotional intensity - strongly emotionally framed content';
    }
}

// Get score color class
function getScoreColorClass(score) {
    // Low score = green (neutral), Medium = yellow (loaded), High = red (alarmist)
    if (score < 33) {
        return 'score-low';  // Green for neutral
    } else if (score < 66) {
        return 'score-medium';  // Yellow for loaded
    } else {
        return 'score-high';  // Red for alarmist
    }
}

// Create probability item element
function createProbabilityItem(label, probability) {
    const container = document.createElement('div');
    container.className = 'probability-item';
    
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label.charAt(0).toUpperCase() + label.slice(1);
    labelSpan.className = 'prob-label';
    
    const probSpan = document.createElement('span');
    probSpan.textContent = `${(probability * 100).toFixed(1)}%`;
    probSpan.className = 'prob-value';
    
    container.appendChild(labelSpan);
    container.appendChild(probSpan);
    
    const bar = document.createElement('div');
    bar.className = 'probability-bar';
    
    const barFill = document.createElement('div');
    barFill.className = `probability-bar-fill ${label.toLowerCase()}`;
    barFill.style.width = `${probability * 100}%`;
    
    bar.appendChild(barFill);
    container.appendChild(bar);
    
    return container;
}

// Initialize on load - auto-analyze current page
document.addEventListener('DOMContentLoaded', async () => {
    await initializeExtension();
    // Setup button handler
    const reanalyzeBtn = document.getElementById('reanalyze');
    if (reanalyzeBtn) {
        reanalyzeBtn.addEventListener('click', analyzeCurrentPage);
    }
    await analyzeCurrentPage();
});

// Show/hide loading
function showLoading(show) {
    document.getElementById('loadingIndicator').style.display = show ? 'block' : 'none';
}

// Show error
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Hide error
function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

// Hide results
function hideResults() {
    document.getElementById('resultsSection').style.display = 'none';
}
