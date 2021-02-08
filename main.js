var minute_h1 = document.getElementById('minutes').textContent;
var second_h1 = document.getElementById('seconds').textContent;


num = 60;
function minute(num) {
   minute_h1 = num
   num--



}

function second(num) {
  second_h1 = num
  num --


}

minute(num);
second(num);

setInterval(second, 1000);
setInterval( minute, 60000);

