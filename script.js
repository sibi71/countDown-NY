const year = document.getElementById("year")
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const loading = document.getElementById("loading");
const conutdown = document.getElementById("countdown")

let curentyear = new Date().getFullYear()

let nextyear = curentyear + 1;

year.innerHTML = nextyear

let newYearTime = new Date(`january 01 ${nextyear} 00:00:00`)

function updateCountDown() {
    let currentTime = new Date()
    let time = newYearTime - currentTime
    console.log(time);

    let d = Math.floor(time / 1000 / 60 / 60 / 24);
    let h = Math.floor(time / 1000 / 60 / 60) % 24;
    let m = Math.floor(time / 1000 / 60) % 60;
    let s = Math.floor(time / 1000) % 60;

    days.innerHTML = d < 10 ? "0" + d : d 
    hours.innerHTML = h < 10 ? "0" + h : h ;
    minutes.innerHTML = m < 10 ? "0" + m : m ;
    seconds.innerHTML = s < 10 ? "0" + s : s  ;
 }

setInterval(updateCountDown,1000)

setTimeout(()=>{
loading.remove()
conutdown.style.display = "flex"

},1000)



