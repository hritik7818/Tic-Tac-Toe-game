let turn = "X";
const turnMusic = new Audio("ting.mp3");
const music = new Audio("music.mp3");
const gameOverMusic = new Audio("gameover.mp3");
// music.play();
function changeTurn() {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}
const checkWin = () => {
  let flag = false;
  let boxText = document.getElementsByClassName("box-text");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[1]].innerText === boxText[e[2]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      flag = true;
    }
  });
  if (flag) {
    return true;
  } else {
    return false;
  }
};

function gameOverCheck() {
  return checkWin();
}
//* game logic

let gridElements = document.getElementsByClassName("box");
document.querySelector(".game-turn-info").innerText = `${turn} Turn`;
Array.from(gridElements).forEach(function (element) {
  let boxText = element.querySelector(".box-text");
  element.addEventListener("click", function () {
    if (boxText.innerText === "") {
      if (!gameOverCheck()) {
        turnMusic.play();
        boxText.innerText = turn;
        if (checkWin()) {
          gameOverMusic.play();
          music.pause();
          music.currentTime = 0;
          document.querySelector(".game-turn-info").innerText = "Game Over!";
          document.querySelector(".game-win-info").innerText = `${turn} Won!`;
        } else {
          turn = changeTurn();
          document.querySelector(".game-turn-info").innerText = `${turn} Turn`;
        }
      }
    }
  });
});
