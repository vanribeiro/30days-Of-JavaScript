// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const warningMsg = document.querySelector('.warning');
const triggers = document.querySelectorAll('a');
const hightlight = document.createElement('span');
hightlight.classList.add('highlight');
document.body.appendChild(hightlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX
    }
    hightlight.style.height = `${coords.height}px`;
    hightlight.style.width = `${coords.width}px`;
    hightlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

window.addEventListener('touchstart', (e) => {
    if(e.type === 'touchstart'){
        warningMsg.style.display = 'block';
        warningMsg.innerHTML = `⚠ Sorry! This application <strong>only supports mouse usage</strong>. No one support offers to touch screen user... `
    } else{
        triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));
    }
});

window.addEventListener('mousemove', (e) => {
    if(e.type === 'mousemove'){
        warningMsg.style.display = 'none';
        triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));
    }
})