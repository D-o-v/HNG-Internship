// chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
//  if(changeInfo.status==="complete" && /^http/.test(tab.url)){
//     chrome.scripting.executeScript({
//         target: { tabId},
//        files:["../src/App.tsx"]
//     }).then(()=>{
//         console.log("We have injected the content script")
//     }).catch(err=>console.log(err, "error occured"))
//  }
// })
// background.js

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'download' && message.data instanceof Blob) {
//       const recordedVideoBlob = message.data;
//       const downloadLink = document.createElement('a');
//       downloadLink.href = URL.createObjectURL(recordedVideoBlob);
//       downloadLink.download = 'recorded-video.webm';
//       downloadLink.click();
//     }
//   });
  