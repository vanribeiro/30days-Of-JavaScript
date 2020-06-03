import slider from './slider.js';
let isDown = false;
let startX;
let scrollLeft;
let touches;

function handleTouchStart(e) {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    touches = e.changedTouches;
    
    for (let i = 0; i < touches.length; i++) {
        startX = touches[i].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
}

function handleTouchOff() {
    isDown = false;
    slider.classList.remove('active');
}

function handleTouchMove(e) {
    e.preventDefault();
    if(!isDown) return;
    touches = e.changedTouches;
    
    for (let i = 0; i < touches.length; i++) {
        let x = touches[i].pageX - slider.offsetLeft;
        let walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
    }
}

export { handleTouchStart, handleTouchOff, handleTouchMove }
