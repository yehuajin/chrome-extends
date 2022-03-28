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
  console.log(message);
  const params = {
    domain: ".liepin.com",
    url: "http://lpt.liepin.com",
    cookie: JSON.stringify(message),
  };
  window.opener.postMessage(params, "*");
});
