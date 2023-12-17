chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "exportTabs") {
      chrome.tabs.query({}, function(tabs) {
        let tabData = tabs.map(tab => ({ url: tab.url, title: tab.title }));
        sendResponse({tabData: tabData});
      });
      return true; // Keep the message channel open for sendResponse
    }
  });