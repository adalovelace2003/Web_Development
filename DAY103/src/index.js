"use strict";

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
//   answers: new Array(4).fill(0),
//   resgisterNewAnswer() {
//     // console.log(`${this.question} \n${this.options.join("\n")}`)
//     //    this.answers.push(Number (prompt(`${this.question} \n${this.options.join("\n")}`)))
//     const x = Number(prompt(`${this.question} \n${this.options.join("\n")}`));
//     this.answers[x]++;
//     console.log(poll.answers);
//     this.displayResults(x);
//   },
//   displayResults(x) {
//     alert(`You entered ${this.options[x]}`);
//   },
// };
// document
//   .querySelector("#click")
//   .addEventListener("click", poll.resgisterNewAnswer.bind(poll));
// // poll.displayResults.call({answers: [1,2,3]})

// // IIFE
// // Immediately Invoked Function Expressions ( IIFE )

(function () {
  console.log("THis will never run again");
  const isPrivate = 23;
})();

(() => console.log("THis will also never run again"))();

// // Closures

const secureBooking = function(){
let passengerCount = 0    ;

return function () {
    passengerCount++;
    console.log(passengerCount);
}
}

const booker = secureBooking();

booker();
booker();


// let f ;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a+2);
//     }
// }

// const h = function () {
//     const b = 7;

//     f= function () {
//         console.log(b*2);
//     }
// }

// g();
// f();

// console.dir(f);
// h();
// f();

// console.log(f);
// console.dir(f);

const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

    setTimeout(() => {
        console.log(`We are now boarding in all ${n} passengers \n
There are 3 groups , each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180,3)

(function () {
  const header = document.querySelector("button");
  header.style.color = "yellow";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
