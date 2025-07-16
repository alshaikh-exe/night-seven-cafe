
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