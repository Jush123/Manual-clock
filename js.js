const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secondEl = document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.tramsform = `rotate (${hourDeg}deg)`;
    const minDeg = (min / 60) * 360;
    minEl.style.tramsform = `rotate (${minDeg}deg)`;
    const secondDeg = (hour / 60) * 360;
    secondEl.style.tramsform = `rotate (${secondDeg}deg)`;
}

updateClock();