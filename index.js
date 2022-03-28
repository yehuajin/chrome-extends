// document.getElementById("button").onclick = () => {
//   console.log(12345);
//   chrome.cookies.getAll({ domain: "liepin.com" }, function (cookie) {
//     console.log("cookie", cookie);
//     // 发送到bg
//     // chrome.runtime.sendMessage(cookie, function () {
//     //   alert('发送成功！')
//     // });
//     // 发送到content
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, cookie, function () {});
//     });
//   });
// };
chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  alert("前端/后端/Popup收到");
  sendResponse("popup返回值");
});
