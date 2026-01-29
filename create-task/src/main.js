import "./style.css";
const startscreen = document.querySelector(".startscreen");
const playbtn = document.querySelector(".playbtn");

playbtn.addEventListener("click", () => {
  startscreen.style.display = "none";
  startgame();
});
