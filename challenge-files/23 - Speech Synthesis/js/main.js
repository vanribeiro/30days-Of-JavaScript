import { 
    setVoice, populateVoices, setOptions, toggle
} from './modules/functions.js';
import {
    msg, options, voicesDropdown,
    speakButton, stopButton
} from './modules/htmlelements.js';

msg.text = document.querySelector('[name="text"]').value;
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOptions));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));