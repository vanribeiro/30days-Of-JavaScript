const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen-button');
const fullscreenIcon = player.querySelector('#fullscreen-icon');
const timeDone = player.querySelector('.timer .done');
const timeTotal = player.querySelectorAll('.timer .total');

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

/*
function handleTimer(e) {
    console.log(video);
    let calcTimeDone = video.currentTime;
    timeDone.textContent = calcTimeDone;
    timeTotal.textContent = video.duration;
}
*/

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

player.addEventListener('keydown', keyboardFullScreen);
player.addEventListener('keydown', keyboardTogglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// video.addEventListener('timeupdate', handleTimer);
fullscreen.addEventListener('click', handleFullScreen);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => 
    button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdte));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdte));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = true);

