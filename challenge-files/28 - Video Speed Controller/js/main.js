import { speed } from './modules/elements.js';
import { handleSpeedBarMouse } from './modules/moused.js';
import { handleSpeedBarTouch } from './modules/touched.js';

speed.addEventListener('mousemove', handleSpeedBarMouse);
speed.addEventListener('touchmove', handleSpeedBarTouch);