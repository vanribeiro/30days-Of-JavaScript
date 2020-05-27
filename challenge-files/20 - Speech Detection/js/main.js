window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// Find the transcription text
recognition.addEventListener('result', e =>{
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.textContent = transcript;
        
        // Verify when the speech ends
        if(e.results[0].isFinal){
            p = document.createElement('p');
            words.appendChild(p);
        }

        if(transcript.includes('banana')){
            // console.log(transcript.includes('JavaScript'))
            // let word = transcript.replace('banana', "<span class='hl'>banana</span>");
            // p.innerHTML = word;
        }
    
});


recognition.addEventListener('end', recognition.start);

recognition.start();