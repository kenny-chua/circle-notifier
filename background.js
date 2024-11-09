// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'showNotification') {
      chrome.notifications.create('', request.options);
    }
  });
  
  // Optional: Handle notification click events
  chrome.notifications.onClicked.addListener((notificationId) => {
    // Close the notification
    chrome.notifications.clear(notificationId);
  
    // Focus or open the Circle.so messages page
    chrome.tabs.create({ url: 'https://pybites.circle.so/messages' });
  });
  