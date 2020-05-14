const player = document.querySelector('.player');
const playerControls = player.querySelector('.player__controls');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen-button');
const fullscreenIcon = player.querySelector('#fullscreen-icon');
const timer = player.querySelector('.timer');
const timeDone = timer.querySelector('.done');
const timeTotal = timer.querySelector('.total');


export { 
    player, playerControls, video, progress, progressBar,
    toggle, skipButtons, ranges, fullscreenButton, fullscreenIcon,
    timeDone, timeTotal
}