const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    // Stop bubbling
    e.stopPropagation();
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', (e) => {
    console.log("click");
}, {once: true});