// Mobile adaptation

const canvas = document.querySelector('#draw');
const context =  canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//When I touch with the finger
const startTouch = (e) => {
    e.preventDefault();
    isDrawing = true;
    let touches = e.changedTouches;
    for (let index = 0; index < touches.length; index++) {
      [lastX, lastY] = [touches[index].pageX, touches[index].clientY]
    }
}

//When I'm moving the finger
const drawingTouch = (e) => {
    e.preventDefault();
    if(!isDrawing) return;
    let touches = e.changedTouches;
    for (let index = 0; index < touches.length; index++) {
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(touches[index].pageX, touches[index].pageY);
      context.strokeStyle = `hsl(${hue}, 100%, 40%)`;
      context.stroke();
      [lastX, lastY] = [touches[index].pageX, touches[index].pageY]
    //   console.log(touches[index]);
      hue++;
      if(hue >= 360){
        hue = 0;
      }
    
      if(context.lineWidth >= 50 || context.lineWidth <= 1){
        direction = !direction;
      }
    
      if(direction){
        context.lineWidth++;
      } else {
        context.lineWidth--;
      }
    }
}

const endTouch = (e) => {
    e.preventDefault();
    return false;
}

const leaveTouch = (e) => {
    e.preventDefault();
    return isDrawing = false;
}

export { startTouch, drawingTouch, endTouch, leaveTouch }