import slider from './modules/slider.js';
import { 
    handleMouseDown, 
    handleMouseMove, 
    handleMouseOff
} from './modules/moused.js';
import {
    handleTouchStart,
    handleTouchMove,
    handleTouchOff
} from './modules/touched.js';

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseOff);
slider.addEventListener('mouseup', handleMouseOff);
slider.addEventListener('mousemove', handleMouseMove);

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchcancel', handleTouchOff);
slider.addEventListener('touchend', handleMouseOff);
slider.addEventListener('touchmove', handleTouchMove);

