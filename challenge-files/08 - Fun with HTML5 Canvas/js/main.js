const canvas = document.querySelector('#draw');
  const context =  canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.strokeStyle = '#000000';
  context.lineJoin = 'round';
  context.lineCap = 'round';

  /*https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation*/
  // context.globalCompositeOperation = 'difference';

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

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => false);