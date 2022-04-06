// 往bg发送消息
chrome.extension.sendMessage({origin: location.origin}, function () {});

// chrome.extension.onMessage.addListener(
// 	function(request, sender, sendResponse) {
//     console.log('request', request);
// 	}
// );
// 接受bg发过来的信息
chrome.runtime.onMessage.addListener(function (message) {
  if (location.pathname.indexOf('/user/login') === -1) {
    window.opener.postMessage(JSON.stringify(message), "*");
  }
});
