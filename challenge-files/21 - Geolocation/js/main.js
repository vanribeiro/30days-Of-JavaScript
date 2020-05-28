const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    /**
     * data.coords.speed returns meters/seconds
     * 1m/s = 3.6km/h
     */
    speed.textContent = (data.coords.speed * 3.6).toFixed(5);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
});