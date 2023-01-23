const timestamp_2024 = new Date('January 1, 2024 00:00:00 GMT-03:00').getTime();

const daysButton = document.querySelector("#day");
const hoursButton = document.querySelector('#hour');
const minutesButton = document.querySelector('#minute');
const secondsButton = document.querySelector('#second');

const bottomTexts = document.querySelectorAll('.text');

const titleText = document.querySelector('#title');

const newYear = () => {
    daysButton.textContent = "2";
    hoursButton.textContent = "0";
    minutesButton.textContent = "2";
    secondsButton.textContent = "4";
    titleText.textContent = "2024 is already here, happy new year!"
    bottomTexts.forEach(element => element.textContent = "");
}

const getTime = () => {
    var timestamp_actual = new Date().getTime();
    var distance_2024 = timestamp_2024 - timestamp_actual;

    var seconds = distance_2024/1000;
    var minutes = seconds/60;
    var hours = minutes/60;
    var days = hours/24;
    
    var remainingDays = Math.trunc(days);
    var remainingHours = Math.trunc(hours%24);
    console.log(hours);
    var remainingMinutes = Math.trunc(minutes%60);
    var remainingSeconds = Math.trunc(seconds%60);

    daysButton.textContent = remainingDays;
    hoursButton.textContent = remainingHours;
    minutesButton.textContent = remainingMinutes;
    secondsButton.textContent = remainingSeconds;

    if(timestamp_actual >= timestamp_2024) {
        clearInterval(intervalId);
        newYear();
    }
}

var intervalId = window.setInterval(function(){
    getTime()
  }, 1000);