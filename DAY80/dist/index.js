let player = {
  name: "Per",
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector(".cards-el");

let moneyEl = document.querySelector("#money-el");
moneyEl.textContent = player.name + " :$ " + player.chips;

function startGame() {
  isAlive = true;
  styleNewButton();
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13 + 1);
  if (randomCard > 10) {
    randomCard = 10;
  } else if (randomCard === 1) {
    randomCard = 11;
  }
  return randomCard;
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Woho!, You've got  Blackjack ";
    document.querySelector("#message-el").style.color = "purple" 
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
  if (!isAlive) {
    styleNewButton();
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck");
    let card = getRandomCard();
    cards.push(card);
    sum += cards[2];
    renderGame();
  }
}

function styleNewButton() {
  if (isAlive) {
    document.querySelector("#message-el").style.color = "white" 
    document.querySelector("#newCard-el").style.cursor = "pointer";
    document.querySelector("#newCard-el").style.opacity = 1;

    const element = document.querySelector("#newCard-el");

    element.addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgb(250 204 21 ";
    });

    element.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
  } else {
    document.querySelector("#message-el").style.color = "red" 
    document.querySelector("#newCard-el").style.cursor = "not-allowed";
    document.querySelector("#newCard-el").style.opacity = 0.8;

    const element = document.querySelector("#newCard-el");

    element.addEventListener("mouseover", function () {
      this.style.backgroundColor = "red";
    });

    element.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
  }
}
