export default function () {
  const buttonTree = document.querySelector("#tree");
  const buttonCloud = document.querySelector("#cloud");
  const buttonStore = document.querySelector("#store");
  const buttonFire = document.querySelector("#fire");

  const audioChuva = new Audio("./assets/Chuva.wav");
  const audioCafeteira = new Audio("./assets/Cafeteria.wav");
  const audioFloresta = new Audio("./assets/Floresta.wav");
  const audioLaleira = new Audio("./assets/Lareira.wav");

  let audiochoice;
  buttonTree.addEventListener("click", function () {
    audioFloresta.play();
  });
  buttonCloud.addEventListener("click", function () {
    audioChuva.play();
  });
  buttonStore.addEventListener("click", function () {
    audioCafeteira.play();
  });
  buttonFire.addEventListener("click", function () {
    audioLaleira.play();
  });
}
