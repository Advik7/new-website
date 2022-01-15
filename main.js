const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const inputDate = document.getElementById('date')
const inputButton = document.querySelector('button');
const error = document.getElementById('error')
const months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};
let newYears;

inputButton.addEventListener('click' , () => {
    if (inputDate.value ) {

      let array = inputDate.value.split("/");
      newYears = array[0] + " " + months[array[1]] + " " + array[2]
      inputDate.value = ""
      error.textContent = ""
    } else {
        error.textContent = "Please input date"
    }

})




function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (newYears != undefined || newYears != null  ) {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  } 
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
