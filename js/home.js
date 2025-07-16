
const tutorialContainer = document.getElementById("tutorial-container");
const tutorialButton = document.getElementById("tutorial");
const tutorialExit = document.getElementById("tutorial-exit");

tutorialButton.addEventListener("click", () => {
  tutorialContainer.classList.remove("hidden");
});

tutorialExit.addEventListener("click", () => {
  tutorialContainer.classList.add("hidden");
  console.log("test")
});

const homeMusic = new Audio("/assets/sounds/home.mp3");
homeMusic.currentTime = 0;
homeMusic.volume = 0.8;

document.addEventListener("click", playHomeMusic);

function playHomeMusic() {
  homeMusic.play();
  document.removeEventListener("click", playHomeMusic());
}




