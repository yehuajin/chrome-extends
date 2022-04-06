// 接受content的消息
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  const list  = request.origin.split('.');
  list.shift();
  chrome.cookies.getAll({ domain: list.join('.') }, function (cookie) {
    // 往content中发送数据
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, cookie, function () {});
    });
  });
});
