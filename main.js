const minute_h1 = document.getElementById('minutes').innerText;
const second_h1 = document.getElementById('seconds').innerText


num = 60
function minute() {
   minute_h1 = num
   num--



}

function second() {
  second_h1 = num
  num --


}

minute()
second()

setInterval(second, 1000)
setInterval( minute, 60000)

