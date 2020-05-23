const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const items = document.querySelectorAll('li');
const totalTimer = document.querySelector('.total-time-video');

const totalSeconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const[mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    }).reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft);

if(secondsLeft >= 0 && secondsLeft < 10 ){
    totalTimer.textContent = `${hours}:${mins}:0${secondsLeft}`;
    if(mins >=0 && mins < 10 ){
        totalTimer.textContent = `${hours}:0${mins}:0${secondsLeft}`;
    }
} else{
    totalTimer.textContent = `${hours}:${mins}:${secondsLeft}`;
}

let count = 0;
items.forEach(item =>{
    count++;
    item.innerHTML = `
        <p><strong>Video ${count}</strong></p>
        <p><i>Time</i>: ${item.dataset.time}</p>
    `;
})