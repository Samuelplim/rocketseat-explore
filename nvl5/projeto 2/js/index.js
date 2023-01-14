import {
  buttonPlay,
  buttonPlus,
  buttonStop,
  buttonSubtract,
  textMinutes,
} from "./elementsControl";
let seconds = 0;
let refTimeout;
function convertSecondsToMinutes() {
  let minutes = Math.trunc(seconds / 60);
  let secondsRes = seconds % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (secondsRes < 10) {
    secondsRes = `0${secondsRes}`;
  }
  return `${minutes}:${secondsRes}`;
}
function uptadeTimer() {
  textMinutes.innerHTML = convertSecondsToMinutes();
}

function coutdown() {
  if (seconds === 0) {
    return;
  }
  refTimeout = setTimeout(function () {
    seconds = seconds - 1;
    coutdown();
  }, 1000);
}

buttonPlay.addEventListener("click", function () {
  audioChuva.play();
  coutdown();
});
buttonStop.addEventListener("click", function () {
  clearTimeout(refTimeout);
  seconds = 0;
  uptadeTimer();
});
buttonPlus.addEventListener("click", function () {
  seconds += 300;
  uptadeTimer();
});
buttonSubtract.addEventListener("click", function () {
  seconds -= 300;
  uptadeTimer();
});
