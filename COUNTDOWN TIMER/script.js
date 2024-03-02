let dayItem = document.querySelector('#days');
let hourItem = document.querySelector('#hours');
let minItem = document.querySelector('#mins');
let secItem = document.querySelector('#seconds');

let countdown = () => {
    let futureDate = new Date('1 jan 2025');
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mins = Math.floor(myDate / 1000 / 60 ) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hourItem.innerHTML = hours;
    minItem.innerHTML = mins;
    secItem.innerHTML = seconds;
}
countdown();

setInterval(countdown, 1000);