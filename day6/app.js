const timelen = 0;
let time = timelen * 60;
const diply = document.querySelector(".displey");
const btn = document.querySelector(".btn")
setInterval(updeta, 1000);

function updeta() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  diply.innerHTML = `${minutes}:${seconds}`;
  console.log(`${minutes}:${seconds}`);
  time++;
}
