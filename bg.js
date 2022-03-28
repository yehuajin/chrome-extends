chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
   chrome.cookies.getAll({ domain: "liepin.com" }, function (cookie) {
    console.log("cookie", cookie);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, cookie, function () {});
    });
  });
});
