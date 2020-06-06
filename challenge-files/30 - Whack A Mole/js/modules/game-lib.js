import { 
    holes, scoreBoard, startButton, timer
} from './page-elements.js';

let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 0;

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + max);
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        return randomHole(holes);
    }
    
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() =>{
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}

function startGame() {
    let secondsToPlay = 10000;
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, secondsToPlay);
}

function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

function timerRound(seconds) {
    startButton.disabled;
    clearTimeout(timeLeft);
    const now = Date.now();
    const secondsToPlay = now + seconds;
    timeLeft = setInterval(() => {
        const secondsLeft = Math.round((secondsToPlay - Date.now())/1000);
        if(secondsLeft < 0) {
            clearInterval(timeLeft);
            return
        };
        timer.textContent = `0:${secondsLeft < 10 ? 0 : ''}${secondsLeft}`;
    });
}

export { bonk, startGame };