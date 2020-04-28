const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes/60)) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (((hour/12)) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

/*Give to us an interval of 01 second*/
setInterval(setDate, 1000);