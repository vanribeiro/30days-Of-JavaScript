import { startTouch , drawingTouch, endTouch, leaveTouch} from './modules/touch-screen.js';
import { mouseDown, draw, mouseUp, mouseOut } from './modules/mouse-screen.js';
const canvas = document.querySelector('#draw');
const context =  canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#000000';
context.lineJoin = 'round';
context.lineCap = 'round';


/*https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation*/
// context.globalCompositeOperation = 'difference';

//Wes Version
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', mouseUp );
canvas.addEventListener('mouseout', mouseOut);

//Van Ribeiro Version - TouchScreen
//Based on the MDN - Using Pointer Article
//https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events
canvas.addEventListener('touchstart', startTouch);
canvas.addEventListener('touchend', endTouch);
canvas.addEventListener('touchleave', leaveTouch);
canvas.addEventListener('touchmove', drawingTouch);