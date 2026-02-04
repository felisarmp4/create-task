import "./style.css";
import "./counter.js";

let sequence = [];
let playersequence = [];
let level = 0;

export function startgame() {
  sequence = [];
  playersequence = [];
  level = 0;
  nextround();
}
