"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice-section");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
// diceEl.classList.add("hidden");

document.querySelector(".dice").addEventListener("click", function () {
  if (playing) {
    // shuffleDots();
    //   Display Logics
    setTimeout(() => {
      clear();
      let randNum = Math.ceil(Math.random() * 6);
      console.log(randNum);
      if (randNum == 1) {
        document.getElementsByTagName("span")[4].innerHTML = "&bull;";
      } else {
        editDot(numberArray(randNum), 1);
      }
      // Decreasing the opacity of the dice points after 1.5s of displaying
      setTimeout(() => {
        try {
          editDot(numberArray(randNum), 0);
        } catch (error) {
          console.error(
            "An error occurred while executing the editDot function: This is because , you pressed the dice button faster than 750ms",
            error
          );
        }
      }, 750);
      // Math Logics

      if (randNum !== 1) {
        currentScore += randNum;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        switchPlayer();
      }
    }, 100); //1900
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//New Game
btnNew.addEventListener("click", function () {
  scores = [0, 0];
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove("player--winner");
  }
  currentScore = 0;
  playing = true;
  diceEl.classList.remove("hidden");
  activePlayer = 0;
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
});
