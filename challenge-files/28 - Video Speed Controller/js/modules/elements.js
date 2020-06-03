const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const widthScreen = window.screen.availWidth;
const widthViewPort = window.innerWidth;
const min = 0.4; const max = 4;

export {
    speed, bar, video, widthViewPort,
    widthScreen, min, max
}