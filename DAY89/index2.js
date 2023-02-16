"use strict";

function sum(a, b) {
  console.log(`${a + b}`);
}

function checkGender(initial) {
  return initial == "M" ? 1 : 0;
}

function hello(Name, ID) {
  console.log(`Hi, ${Name}. Your Employee ID is ${ID}`);
}

// hello('Ram', 10);

let greet = hello;

greet("Shyam", 10);

sum(1, 2);
let gender;

gender = prompt("M or F");
gender = checkGender(gender);

gender ? console.log("Male") : console.log("Female");




