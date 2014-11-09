//
// background.js for chrome apps
//

chrome.app.runtime.onLaunched.addListener(function() {
   chrome.app.window.create('index.html', {
      width: 1000,
      height: 650,
      maxHeight: 650,
      type: 'shell',
      singleton: false
   },function(appWindow) {
   });
});