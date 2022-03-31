chrome.extension.sendMessage(
  { cmd: "来自前台页面的主动调用" },
  function (response) {
    console.log(response);
  }
); //测试前台掉后台

// chrome.extension.onMessage.addListener(
// 	function(request, sender, sendResponse) {
//     console.log('request', request);
// 	}
// );

chrome.runtime.onMessage.addListener(function (message) {
  if (location.pathname.indexOf('/user/login') === -1) {
    window.opener.postMessage(JSON.stringify(message), "*");
  }
});
