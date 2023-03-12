"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   printAge();

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     var millenial = "I am millenial";
//     const str = ` OOh, yyou are a millenial ,${firstName}`;
//     console.log(str);

//     function add(a, b) {
//       console.log(a + b);
//       return a + b;
//     }
//   }

//   // add(1, 2); // this will be only  called if we are not in strict mode
//   // console.log(str); // scope error
//   console.log(millenial); // this wont have scope error bcz it is declared using var

//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// Variables
// console.log(me);
// console.log(job);
// console.log(year);
//
//
// var me = "Jonas";
// let job = "Teacher";
// const year = 1991;
//
//
// Functions
//
// console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));
//
// function addDeclaration(a, b) {
// return a + b;
// }
//
// const addExpression = function (a, b) {
// return a + b;
// };
//
// const addArrow = (a, b) => a + b;
//
//
// Pitfall of hoisting

// if (!numProducts) deletShoppingCart();

// var numProducts = 10;

// function deletShoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);

// // THIS KEYWORKD
// var year = 1937;

// console.log(jonas.calculateAge());

// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1937);

// const calcAge2 = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// // calcAge2(1837);

// const jonas = {
//   name: "Jonas",
//   year: "1991",
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.year;
//   },
//   calculateAge: () => {
//     console.log(this);
//     return Number(2037 - this.year); // this will pick the global variable
//   },
// };
// // console.log(jonas.calcAge());

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// const f = jonas.calcAge;

// f();

// const jonas = {
//   name: "Jonas",
//   year: "1991",
//   calcAge: function () {
//     // console.log(this);
//     // return 2037 - this.year;

//     //  THis is using the old method
//     // const self = this;
//     // const isMillenial = function () {
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     // Using the arrow functins
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   // greet: () => console.log(`Hey ${this.name}`),
//   greet: function () {
//     console.log(`Hey ${this.name}`);
//   },
// };

// // jonas.greet();
// // jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
// };

// const addExprArrowFunction = (a, b) => {
//   console.log(arguments);     // arguments is not available in arrow functions.
// };

// addExpr(1, 2);
// addExpr(1, 2, 3, 4);

// // addExprArrowFunction(1,2);

// Primitives
let age = 30;
let oldAge = age;

age = 31;

// console.log(age);
// console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
  family:["ram","shyam","hari"]
};

// const friend = Object.create(me); /* inheritng object  */ 
// const friend = Object.assign({},me);    //this will also create a shallow copy and when we push the object into the array in friends, the array of the me will also change because both of them are pointing to the same memory location. So , to overcome that , we do something that is called deep cloning. to do thhat , one method is const friend = JSON.parse(JSON.stringify(me)); 
// const friend = me; // this just create a new stack that points to the same heap address as me as pointing.. 
// const friend = JSON.parse(JSON.stringify(me));
const friend = JSON.parse(JSON.stringify(me));  // deep cloning

console.log(me);
console.log(friend);

friend.age = 100;
friend.family.push("kabita","babita")

console.log(me);
console.log(friend);
