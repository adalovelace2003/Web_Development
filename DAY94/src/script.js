"use strict";
let openBtnEl = document.querySelectorAll(".openBtn");
let closeBtnEl = document.querySelectorAll(".closeBtn");

// iterating and listening through every button
for (let item of openBtnEl) {
  item.addEventListener("click", function () {
    console.log("clicked1");
    document.querySelector("div").style.display = "block"
  });
}


// iterating and listening through every button
for (let item of closeBtnEl) {
  item.addEventListener("click", function () {
    console.log("clicked99");
    document.querySelector("div").style.display = "none"
  });
}
