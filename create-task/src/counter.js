import { startgame } from "./main.js";

const startscreen = document.querySelector(".startscreen");
const playbtn = document.querySelector(".playbtn");
const gamebuttons = document.querySelector(".gamebuttons");
const instructiontext = document.querySelector(".instruction-text");

playbtn.addEventListener("click", () => {
  startscreen.classList.add("fade-out");

  setTimeout(() => {
    startscreen.style.display = "none";
    gamebuttons.classList.remove("hidden");
    gamebuttons.offsetHeight;
    setTimeout(() => {
      gamebuttons.classList.add("fade-in");
    }, 600);

    startgame();
  }, 400);
});

export function resettostart() {
  gamebuttons.classList.remove("fade-in");
  gamebuttons.classList.add("hidden");

  startscreen.style.display = "flex";
  startscreen.classList.remove("fade-out");
}

export function showinstruction(text) {
  instructiontext.textContent = text;
  instructiontext.classList.add("show");
}

export function hideinstruction() {
  instructiontext.classList.remove("show");
}
