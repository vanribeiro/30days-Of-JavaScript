import { bar, min, max, video, widthViewPort } from './elements.js';
let touches = 0;

function handleSpeedBarTouch(e) {
    touches = e.changedTouches;
    if(widthViewPort <= 768){
        for(let i = 0; i < touches.length; i++){
            const x = touches[i].clientX - this.offsetLeft;
            const percent = x / this.offsetWidth;
            const width = `${Math.round(percent * 100)}%`;
            const playbackRate = percent * (max - min) + min;
            bar.style.width = width;

            if(playbackRate < 0.4){
                video.playbackRate = 0.4;
            } else if(playbackRate > 4){
                video.playbackRate = 4;
            } else{
                video.playbackRate = playbackRate;
                bar.textContent = `${playbackRate.toFixed(2)}x`;
            }
        }
    } else{
        for(let i = 0; i < touches.length; i++){
            const y = touches[i].clientY - this.offsetTop;
            const percent = y / this.offsetHeight;
            const height = `${Math.round(percent * 100)}%`;
            const playbackRate = percent * (max - min) + min;
            bar.style.height = height;
            
            if(playbackRate < 0.4){
                video.playbackRate = 0.4;
            } else if(playbackRate > 4){
                video.playbackRate = 4;
            } else{
                video.playbackRate = playbackRate;
                bar.textContent = `${playbackRate.toFixed(2)}x`;
            }
        }
    }
    
}

export { handleSpeedBarTouch };