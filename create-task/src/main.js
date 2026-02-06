import "./style.css";
import { resettostart, showinstruction, hideinstruction } from "./counter.js";

let sequence = [];
let playersequence = [];
let level = 0;
let isplaying = false;

const buttons = {
  yellow: document.querySelector(".usagi"),
  white: document.querySelector(".chiikawa"),
  blue: document.querySelector(".hachiware"),
};

const colors = ["yellow", "white", "blue"];

export function startgame() {
  sequence = [];
  playersequence = [];
  level = 0;
  isplaying = false;
  nextround();
}

function nextround() {
  playersequence = [];
  level++;
  isplaying = true;

  const randomcolor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomcolor);

  playsequence();
}

function playsequence() {
  showinstruction("pay attention to the pattern:");

  let index = 0;

  const interval = setInterval(() => {
    if (index >= sequence.length) {
      clearInterval(interval);
      isplaying = false;
      setTimeout(() => {
        showinstruction("your turn! click in order");
      }, 500);
      return;
    }

    const colorname = sequence[index];
    lightupbutton(colorname);
    index++;
  }, 1200);
}

function lightupbutton(colorname) {
  const button = buttons[colorname];

  button.classList.remove("active");
  void button.offsetWidth;
  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
  }, 500);
}

function handleplayerclick(colorname) {
  if (isplaying) return;

  lightupbutton(colorname);

  playersequence.push(colorname);

  const currentindex = playersequence.length - 1;

  if (playersequence[currentindex] !== sequence[currentindex]) {
    hideinstruction();
    gameover();
    return;
  }

  if (playersequence.length === sequence.length) {
    showinstruction("correct! next level");
    setTimeout(() => {
      nextround();
    }, 2000);
  }
}

function gameover() {
  alert(`game over! you reached level ${level}`);
  resettostart();
}

buttons.yellow.addEventListener("click", () => handleplayerclick("yellow"));
buttons.white.addEventListener("click", () => handleplayerclick("white"));
buttons.blue.addEventListener("click", () => handleplayerclick("blue"));
