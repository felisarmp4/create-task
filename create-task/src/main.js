import "./style.css";
const startscreen = document.querySelector(".startscreen");
const playbtn = document.querySelector(".playbtn");
const gamebuttons = document.querySelector(".gamebuttons");

playbtn.addEventListener("click", () => {
  startscreen.classList.add("fade-out");

  setTimeout(() => {
    startscreen.style.display = "none";
    gamebuttons.classList.remove("hidden");
    startgame();
  }, 400);
});
