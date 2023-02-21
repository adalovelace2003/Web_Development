"use strict";
let score = 20;
const messageEl = document.querySelector(".message");
const guessEL = document.querySelector(".guess");
const scoreEL = document.querySelector(".score");
const numberEl = document.querySelector(".number");
// let number = Math.trunc(Math.random() * 20 + 1);
let number = 10
const resetEl = document.querySelector("#reset");
const highscoreEl = document.querySelector(".highscore");

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(guessEL.value);
  if (score !== 0) {
    if (!guess) {
      messageEl.textContent = " No number";
    } else if (guess === number) {
      numberEl.textContent = number;
      messageEl.textContent = " Correct Number";
      changeScore(1);
      changeBgColor(1);
      confirm("You won the game ")
        ? (document.body.style.background = "#121212")
        : 1;
      numberEl.textContent = "?";
      number = Math.trunc(Math.random() * 20 + 1);
      console.log(score);
      Number(highscoreEl.value)
      if (score > Number(highscoreEl.textContent)) {
        highscoreEl.textContent = score;
      }

    } else if (guess > number) {
      messageEl.textContent = " Too High!";
      changeScore(0);
    } else if (guess < number) {
      messageEl.textContent = " Too Low";
      changeScore(0);
    }
  } else {
    changeBgColor(0);
    confirm(" Game Over!Score Has Been Reset .")
      ? (document.body.style.background = "#121212")
      : 1;
  }
});

resetEl.addEventListener("click", function (params) {
  score = 20;
  scoreEL.textContent = score;
  guessEL.value = "";
});

function changeBgColor(num) {
  num
    ? (document.body.style.background = "green")
    : (document.body.style.background = "red");
}

function changeScore(num) {
  num ? score++ : score--;
  scoreEL.textContent = score;
}



