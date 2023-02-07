let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".cards-el");

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Woho!, You've got  Blackjack ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  cardEl.textContent = "Cards: "+ firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}

