import slider from './slider.js';
let isDown = false;
let startX;
let scrollLeft;

function handleMouseDown(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function handleMouseOff() {
    isDown = false;
    slider.classList.remove('active');
}

function handleMouseMove(e) {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
}

export { handleMouseDown, handleMouseOff, handleMouseMove}