import { bar, min, max, video, widthViewPort} from './elements.js';

function handleSpeedBarMouse(e) {
    if(widthViewPort <= 768){
        const x = e.pageX - this.offsetLeft;
        const percent = x / this.offsetWidth;
        const width = `${Math.round(percent * 100)}%`;
        const playbackRate = percent * (max - min) + min;
        bar.style.width = width;
        bar.textContent = `${playbackRate.toFixed(2)}x`;
        video.playbackRate = playbackRate;
    } else{
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const height = `${Math.round(percent * 100)}%`;
        const playbackRate = percent * (max - min) + min;
        bar.style.height = height;
        bar.textContent = `${playbackRate.toFixed(2)}x`;
        video.playbackRate = playbackRate;
    }

}

export { handleSpeedBarMouse };