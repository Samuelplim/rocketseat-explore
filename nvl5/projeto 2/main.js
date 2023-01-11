//controller
const buttonPlay = document.querySelector("#play");
const buttonStop = document.querySelector("#stop");
const buttonPlus = document.querySelector("#plus");
const buttonSubtract = document.querySelector("#subtract");
//song's
const buttonTree = document.querySelector("#tree");
const buttonCloud = document.querySelector("#cloud");
const buttonStore = document.querySelector("#store");
const buttonFire = document.querySelector("#fire");
//variables
const textMinutes = document.querySelector("#timer");
let seconds = 0;

function convertSecondsToMinutes() {
  let minutes = Math.trunc(seconds / 60);
  let secondsRes = seconds % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (secondsRes < 10) {
    secondsRes = `0${secondsRes}`;
  }
  console.log(`${minutes}`);
  return `${minutes}:${secondsRes}`;
}
function coutdown() {
  if (seconds === 0) {
    return;
  }
  setTimeout(function () {
    seconds = seconds - 1;
    textMinutes.innerHTML = convertSecondsToMinutes();
    coutdown();
  }, 1000);
}
buttonPlay.addEventListener("click", function () {
  coutdown();
});
buttonPlus.addEventListener("click", function () {
  seconds += 300;
  textMinutes.innerHTML = convertSecondsToMinutes();
});
buttonSubtract.addEventListener("click", function () {
  seconds -= 300;
  textMinutes.innerHTML = convertSecondsToMinutes();
});
