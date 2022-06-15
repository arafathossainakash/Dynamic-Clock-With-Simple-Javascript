
const hourTime = document.querySelector('#hour');
const minuteTime = document.querySelector('#minute');
const secondTime = document.querySelector('#second');
const progressBar = document.querySelector('#progressBar');

function currentTimeShow (){

    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    hourTime.textContent = hour;
    minuteTime.textContent = minute;
    secondTime.textContent = second;

    progressBar.style.width = (second / 60) * 100 + "%";

}
setInterval(currentTimeShow, 1000);