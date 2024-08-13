
// // let tabState = [];

// // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// //   // const tabId = sender.tab.id;

// //   if (request.type === 'saveState') {
// //     tabState = request.state;
// //     console.log(request.state)
// //     console.log("recieved")
// //   } else if (request.type === 'getState') {
// //     sendResponse(tabState || '');
// //     console.log("snding")
// //     console.log(tabState)
// //   }
// // });

// // // Clean up tab state when the tab is closed
// // chrome.tabs.onRemoved.addListener((tabId) => {
// //   console.log("removing")
// //   delete tabState;
// // });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {


//   if (request.type === 'saveState') {
//     // Save the state in chrome.storage with the tab ID as the key
//     chrome.storage.local.set({ "qa": request.state }, () => {
//       console.log('State saved for tab:');
//     });
//   } else if (request.type === 'getState') {
//     // Retrieve the state using the tab ID
//     chrome.storage.local.get("qa", (result) => {
//       sendResponse(result || '');
//       console.log('State sent for tab:');

//     });
//     return true; // Indicate that sendResponse will be called asynchronously
//   }

// });

// // Clean up the state when the tab is closed
// chrome.tabs.onRemoved.addListener(() => {
//   chrome.storage.local.remove("qa", () => {
//     console.log('State cleaned up for tab:');
//   });
// });
