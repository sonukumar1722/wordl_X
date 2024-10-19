// isten for the message from the popup script, send the word to a dictionary API, and display the definition in the popup


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  console.log("Received message from popup script:", request);

    if(request.word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${request.word}`)
        .then(response => response.json())
        .then(data => alert({
            word : data[0]?.word,
            phonetics : data[0]?.phonetics[0]?.audio,
            definition: data[0]?.meanings[0]?.definitions[0]?.definition || "Definition not found.",
            example : data[0]?.meanings[0]?.definitions[0]?.example || "",
            source :data[0]?.sourceUrls[0]          
          })
        )
        .catch(error => {
          console.error(error);
          chrome.runtime.sendMessage({message: "Error fetching definition."});
        });
    }
    
  });

  
  