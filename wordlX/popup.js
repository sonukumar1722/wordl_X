//  listen for a click event on the extension icon and send a message to the content script to capture the selected word

// chrome.tabs.onSelectionChanged.addListener( function (tabId, info) { 
//     var selection = info.selectionText;
//     chrome.runtime.sendMessage({word: selection});
//     console.log("Selected: ", selection);
//   });
  
  window.addEventListener("dbclick", function(event) {
    const selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({word: selectedText});
    console.log("Selected text:", selectedText);
  });
  // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //   console.log("Received message from content script:", request);
  
  //   if (request.word) {
  //     document.getElementById('word').innerHTML = `<h5>${request.word} </h5> <sub> pronounse  <audio src="${request.phonetics}"></audio> </sub> `;
  
  //     document.getElementById('define').innerHTML =`
  //       <p class="d-inline-flex gap-1">
  //         <button
  //           class="btn btn-dark"
  //           data-bs-toggle="collapse"
  //           href="#multiCollapseExample1"
  //           role="button"
  //           aria-expanded="true"
  //           aria-controls="multiCollapseExample1"
  //         >
  //           English
  //         </button>
    
  //         <a
  //           class="btn btn-dark"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#multiCollapseExample2"
  //           role="button"
  //           aria-expanded="false"
  //           aria-controls="multiCollapseExample2"
  //         >
  //           Hindi
  //         </a>
  //       </p>
    
  //       <div class="row">
  //         <div class="collapse" id="multiCollapseExample1" style="max-width: 25rem">
  //           <div class="card card-body border-primary text-bg-light mb-1">
  //             <p class="card-text">${request.definition}</p>
  //             <p class="card-text"><i>Example:</i> ${request.example}</p>
  //           </div>
  //         </div>
    
  //         <div class="collapse" id="multiCollapseExample2" style="max-width: 25rem">
  //           <div class="card card-body border-primary text-bg-light mb-1">
  //             <h5 class="card-title">card title</h5>
  //             <p class="card-text">Some placeholder content</p>
  //           </div>
  //         </div>
  //       </div>
  //     `;
  //     document.getElementById('source').innerHTML = `<a href="${request.source}">Source</a>`;
  //   }
  // });