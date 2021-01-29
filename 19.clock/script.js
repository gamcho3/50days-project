const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const times = document.querySelector('.time');
const dates = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrsday', 'friday', 'saterday'];


toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('black')) {
        html.classList.remove('black');
        e.target.innerText = 'white Mode';
    } else {
        html.classList.add('black');
        e.target.innerText = 'Dark Mode';
    }
});







function getTimes() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const day = time.getDay();
    const month = time.getMonth();
    const date = time.getDate();
    const hourForClock = hour % 12;
    const ampm = hour > 11 ? 'PM' : 'AM';
    hours.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
    minutes.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    seconds.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    times.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second} ${ampm}`;
    dates.innerHTML = `${months[month]}, <span>${days[day]}</span> <span>${date}</span>`;


}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setInterval(getTimes, 1000);