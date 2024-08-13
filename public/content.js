// // Fetch the HTML content from index.html
// fetch(chrome.runtime.getURL('index.html'))
//   .then(response => response.text())
//   .then(data => {
//     // Create a container element
//     const container = document.createElement('div');
//     container.innerHTML = data;

//     // Insert the container into the webpage
//     // For example, insert it at the top of the body
//     document.body.insertAdjacentElement('afterbegin', container);
//     // Load the CSS file
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = chrome.runtime.getURL('assets/index-45682.css');
//     document.head.appendChild(link);

//     // Load the JS file
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = chrome.runtime.getURL('assets/index-45682.js');
//     document.body.appendChild(script);
//   })
//   .catch(error => console.error('Error loading injected content:', error));
