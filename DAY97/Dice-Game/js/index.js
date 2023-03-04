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
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const showModalBtn = document.getElementById("show-modal-btn");
const showModalBtn2 = document.querySelector(".question-mark");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCloseBtn2 = document.getElementById("modal-close-btn2");
const modalCloseBtnCross1 = document.querySelector("#modal-close-btn-cross-1");
const modalCloseBtnCross2 = document.querySelector("#modal-close-btn-cross-2");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    shuffleDots();
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
    }, 1900);
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 30) {
      document.querySelector(`.h1--${activePlayer}`).classList.toggle("hidden");

      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      //

      // Display You won after 1 second
      setTimeout(() => {
        modal.style.display = "block";
        document
          .querySelector(`.player--h5--${activePlayer}`)
          .classList.toggle("hidden");

        modalCloseBtn.addEventListener("click", () => {
          modal.style.display = "none";
          document
            .querySelector(`.player--h5--${activePlayer}`)
            .classList.toggle("hidden");
        });

        window.addEventListener("click", (event) => {
          if (event.target == modal) {
            modal.style.display = "none";
            document
              .querySelector(`.player--h5--${activePlayer}`)
              .classList.toggle("hidden");
          }
        });
      }, 1000);
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
  unClear();
  scores = [0, 0];
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove("player--winner");
    document.querySelector(`.h1--${activePlayer}`).classList.add("hidden");
  }
  currentScore = 0;
  playing = true;
  diceEl.classList.remove("hidden");
  activePlayer = 0;
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
});

showModalBtn2.addEventListener("click", () => {
  // modal2.style.display = "fixed";
  // console.log("clicked");
  document.querySelector(".modal2").classList.remove("hidden");
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("CLICKED CLOSE BTN");
  document.querySelector(".modal2").classList.add("hidden");
  document.querySelector(".modal").classList.add("hidden");
});

modalCloseBtn2.addEventListener("click", () => {
  document.querySelector(".modal2").classList.add("hidden");
  document.querySelector(".modal").classList.add("hidden");
});

modalCloseBtnCross1.addEventListener("click", () => {
  console.log("clicked Cross 1");
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".modal2").classList.add("hidden");
});

modalCloseBtnCross2.addEventListener("click", () => {
  console.log("clicked Cross");
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".modal2").classList.add("hidden");
});
