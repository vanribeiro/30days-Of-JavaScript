const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    speed.textContent = (data.coords.speed).toFixed(5);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.err(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
});