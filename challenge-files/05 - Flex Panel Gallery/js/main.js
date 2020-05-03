const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

const screenWidth = window.screen.width;

if(screenWidth < 768){
    const message = "💡 ➡ To have a better experience on this page,\nposition your device horizontally. 😉";
    alert(message);
}