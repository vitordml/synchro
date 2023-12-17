document.getElementById('exportButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "exportTabs"}, function(response) {
      // Handle the response containing tab data
      // For now, just logging the response

    });
  });

  function download(data, filename) {
    let blob = new Blob([data], {type: 'text/plain'});
    let url = window.URL.createObjectURL(blob);
    chrome.downloads.download({
      url: url,
      filename: filename
    });
  }
  
  document.getElementById('exportButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "exportTabs"}, function(response) {
        
      download(JSON.stringify(response.tabData, null, 2), 'tabs_backup.json');
      console.log(response.tabData);
    });
  });