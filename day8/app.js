const timelen = 0; 
let timerid;
let time = timelen * 60;
const diply = document.querySelector(".display");
const btn1 = document.querySelector("#btnstrat");
const btn2 = document.querySelector("#btnreset");
const btn3 = document.querySelector("#btnstop");

function starttime() {
  timerid = setInterval(updeta, 1000);
  btn1.disabled = true;
  btn3.disabled = false;
}

function resettime() {
  time = 0;
  updeta()
}

function stoptime() {
  clearInterval(timerid);
  btn1.disabled = false;
  btn3.disabled = true;
}

function updeta() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  diply.innerHTML = `${minutes}:${seconds}`;
  console.log(`${minutes}:${seconds}`);
  time++;
}

btn1.addEventListener("click", starttime);
btn2.addEventListener("click", resettime);
btn3.addEventListener("click", stoptime);
