const deg = 6;
  const hourHand = document.querySelector('[data-hour-hand]');
  const minuteHand = document.querySelector('[data-minute-hand]');
  const secondHand = document.querySelector('[data-second-hand]');
  const dateOutput = document.querySelector('[data-date-output]');

setInterval(setClock, 1000)
function setClock() {
  let currentDate = new Date();
  let hourRotate = currentDate.getHours() * 30;
  let minuteRotate = currentDate.getMinutes() * deg;
  let secondRotate = currentDate.getSeconds() * deg;
 
  
  hourHand.style.transform = 'rotate(' + hourRotate + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteRotate + 'deg)';
  secondHand.style.transform = 'rotate(' + secondRotate + 'deg)';
  dateOutput.innerHTML = currentDate.getDate() + ' / ' + (currentDate.getMonth() + 1) + ' / ' +  currentDate.getFullYear();

}