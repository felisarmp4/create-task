import { startgame } from "./main.js";

const startscreen = document.querySelector(".startscreen");
const playbtn = document.querySelector(".playbtn");
const gamebuttons = document.querySelector(".gamebuttons");

playbtn.addEventListener("click", () => {
  startscreen.classList.add("fade-out");

  setTimeout(() => {
    startscreen.style.display = "none";
    gamebuttons.classList.remove("hidden");
    gamebuttons.offsetHeight;
    setTimeout(() => {
      gamebuttons.classList.add("fade-in");
    }, 50);

    startgame();
  }, 400);
});

export function resettostart() {
  gamebuttons.classList.remove("fade-in");
  gamebuttons.classList.add("hidden");

  startscreen.style.display = "flex";
  startscreen.classList.remove("fade-out");
}
