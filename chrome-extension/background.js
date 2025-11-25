// Background service worker for Ethoscore Chrome Extension

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Ethoscore extension installed');
        // Set default API URL
        chrome.storage.local.set({ apiUrl: 'https://ethoscore-extension.onrender.com' });
    } else if (details.reason === 'update') {
        console.log('Ethoscore extension updated');
    }
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'analyze') {
        // Handle analysis requests if needed
        sendResponse({ success: true });
    }
    return true; // Keep message channel open for async response
});




