const canvas = document.querySelector('#draw');
const context =  canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return;
    context.strokeStyle = `hsl(${hue}, 100%, 40%)`;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360){
        hue = 0;
    }

    if(context.lineWidth >= 100 || context.lineWidth <= 1){
        direction = !direction;
    }

    if(direction){
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}

const mouseDown = (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

const mouseUp = () => isDrawing = false; 
const mouseOut = () => false;

export { draw, mouseDown, mouseUp, mouseOut};