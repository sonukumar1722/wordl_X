window.addEventListener('dblclick', function () {
    const selectedText = window.getSelection().toString();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
        .then(response => response.json())
        .then(data => {

            request = {
                word: data[0]?.word,
                phonetics: data[0]?.phonetics[0]?.audio,
                definition: data[0]?.meanings[0]?.definitions[0]?.definition || "Definition not found.",
                example: data[0]?.meanings[0]?.definitions[0]?.example || "",
                source: data[0]?.sourceUrls[0]
            };


            if (request.word) {
                document.getElementById('word').innerHTML = `<h5>${request.word} </h5> <audio src="${request.phonetics}" >pronunce</audio><img id='audio' src="volume.png" height="15px" width="15px" onclick="document.querySelector('audio').play()">`;

                document.getElementById('define').innerHTML = `
                        <p class="d-inline-flex gap-1">
                        <button
                            class="btn btn-dark"
                            data-bs-toggle="collapse"
                            href="#multiCollapseExample1"
                            role="button"
                            aria-expanded="true"
                            aria-controls="multiCollapseExample1"
                        >
                            English
                        </button>
                    
                        <a
                            class="btn btn-dark"
                            data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample2"
                        >
                            Hindi
                        </a>
                        </p>
                    
                        <div class="row">
                        <div class="collapse" id="multiCollapseExample1" style="max-width: 25rem">
                            <div class="card card-body border-primary text-bg-light mb-1">
                            <p class="card-text">${request.definition}</p>
                            <p class="card-text"><i>Example:</i> ${request.example}</p>
                            </div>
                        </div>
                    
                        <div class="collapse" id="multiCollapseExample2" style="max-width: 25rem">
                            <div class="card card-body border-primary text-bg-light mb-1">
                            <h5 class="card-title">card title</h5>
                            <p class="card-text">Some placeholder content</p>
                            </div>
                        </div>
                        </div>
                    `;
                document.getElementById('source').innerHTML = `<a href="${request.source}">Source</a>`;
            }
        })
    .catch(error => {
        console.error(error);
    })
})

function playPronounce() {
    // Get the audio element.
    const audio = document.querySelector('audio');
  
    // Play the audio element.
    audio.play();
  }
  
