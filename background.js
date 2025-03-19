chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes("ebay.com")) {
      let newUrl = tab.url;
      // Check if the URL already has query parameters
      if (newUrl.includes("?")) {
        newUrl += "&LH_Complete=1&LH_Sold=1";
      } else {
        newUrl += "?LH_Complete=1&LH_Sold=1";
      }
      chrome.tabs.update(tab.id, { url: newUrl });
    } else {
      console.log("The current tab is not an eBay page.");
    }
  });
  