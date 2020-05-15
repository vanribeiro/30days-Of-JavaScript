const input = document.querySelector('#secret-word');
const rightAnswerSound = document.querySelector('#right-answer-sound');
const secretWord = document.querySelector('.strong');
const errorMessage = document.querySelector('.error-answer');
const refreshPage = document.querySelector('.refresh-page');
input.value;

let secretWords = ['banana', 'javascript', 'cupcake', 'blue', 'love'];
let randomWord = secretWords[getRandowWords(secretWords)];

function getRandowWords(secretWords){
  let min = 0, max = secretWords.length;
  return Math.floor(Math.random() * (max - min) + min);
}

refreshPage.addEventListener('click', () =>{
  location.reload();
  input.value = '';
});

const pressed = [];
const secretCode = randomWord;
secretWord.innerHTML = `${randomWord}`;
input.addEventListener('keyup', (e) =>{
  if(e.keyCode > 64 && e.keyCode < 91){
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
      rightAnswerSound.play();
      secretWord.style.color = 'green';
      input.style.color ='green';
      errorMessage.textContent = '';
    } else{
      input.style.color = 'red';
      errorMessage.textContent = 'If you type any letter wrong, please refresh the page to get a new secret word!';
    }
  } 

});