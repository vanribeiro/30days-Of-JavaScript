import {
    video, toggle, progressBar, player, progress,
    timeDone, timeTotal, fullscreenIcon, playerControls
} from './elements.js';

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const icon = this.paused ? '►' : '||';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdte() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


function handleTimerClock() {
    let seconds = Math.floor(video.currentTime);
    let minutes = 0;
    let hour = 0;
    if(seconds > 59){
        seconds = seconds % 60;
        minutes = Math.floor(video.currentTime/60);
        hour = Math.floor(video.currentTime/3600);    
    }  

    minutes > 59 ?
        timeDone.textContent = `${hour.toString()}:${minutes.toString()}:${seconds.toString()}`:
        seconds < 10 ? 
            timeDone.textContent = `${minutes.toString()}:0${seconds.toString()}`:
            timeDone.textContent = `${minutes.toString()}:${seconds.toString()}`;
}


function totalTimeVideo(){
    let hourDuration = Math.floor(video.duration / 3600);
    let minDuration = Math.floor(video.duration / 60);
    let secDuration = Math.floor(video.duration % 60);
    minDuration > 59 ?
        timeTotal.textContent = `${hourDuration.toString()}:${minDuration.toString()}:${secDuration.toString()}`:
        timeTotal.textContent = `${minDuration.toString()}:${secDuration.toString()}`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function keyboardFullScreen(e) {
    if(e.keyCode === 13) handleFullScreen();
}

function keyboardTogglePlay(e) {
    if(e.keyCode === 32) togglePlay();
}

function handleFullScreen(){

    if(!document.fullscreenElement){
        fullscreenIcon.src = 'media/icons/exitfullscreen.svg';
        player.requestFullscreen();
    } else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        fullscreenIcon.src = 'media/icons/fullscreen.svg';
    }
    
}

function hideControls() {
    setInterval(() => {
        playerControls.style.visibility = 'hidden';
    }, 10000)
}

function showControls() {
    playerControls.style.visibility = 'visible';
}

function hideCursor() {
    setInterval(() => {
        player.style.cursor = 'none';        
    }, 10000);
}

function showCursorDefault() {
    player.style.cursor = 'default';
}

export { 
    togglePlay, updateButton, skip, handleFullScreen, scrub,handleProgress, handleRangeUpdte,
    keyboardFullScreen, keyboardTogglePlay, handleTimerClock, 
    hideControls, hideCursor, showControls, showCursorDefault, totalTimeVideo
}