import {
    msg, voicesDropdown
} from './htmlelements.js';

let voices = [];

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) speechSynthesis.speak(msg);
}

function setOptions() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

export { populateVoices, setVoice, toggle, setOptions };