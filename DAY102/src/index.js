"use strict";

// const bookings = [];
// const createBooking = function(flightNum, numPassengers,price){
// old method ES6
// numPassengers = numPassengers || 1;
// price = price || 199;
// ES6
// const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("LH123",2,800)
// createBooking("LJ123",2)
// createBooking("LJ123",2)
// createBooking("LJ123",undefined,1000)

// const flight = "LJ123"
// const jonas = {
//     name:"jonas",
//     passport: 13213213123,
// }

// const checkIn = function (flightNum,passenger) {
//     flightNum = "LH999"
//     passenger.name = "Mr. " + passenger.name;
//      (passenger.passport === 13213213123) ?   alert("CHECK in ")   : alert("Wrong Passport")

// }
// // checkIn(flight,jonas)
// // console.log(flight);
// // console.log(jonas);
// const newPassword = function(person){
//     person.passport = Math.trunc( Math.random() *1000000000)
// }
// newPassword(jonas);
// checkIn(flight,jonas)

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original String : ${str}`);
//   console.log(`Transformed stringg: ${fn(str)}`);
//   console.log(` Transformed by ${fn.name}`);
// };

// transformer("javascript is the best", upperFirstWord);
// transformer(`Javascript is the 2nd best`, oneWord);

// const highFive =()=> {console.log("HI 5")}
// ['Jonas',"Martha","Adam"].forEach(highFive);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");

// greeterHey("Joas");
// greeterHey("Steven");
// greet("Hello")("Jonas");

// const greet2 = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// //shoter way
// const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet2("Salamwalekum")("Ram");
// greet3("Salamwalekum")("Ram");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas");
lufthansa.book(240, "Monas");
// console.log(lufthansa);

const eurowings = {
  airline: "EUroWings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// eurowings.book(23,"Sarah");  //doesnot work

book.call(eurowings, 23, "Sarah WIllaims");
console.log(eurowings);
book.call(lufthansa, 239, "Marry Copper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss air Lines",
  iataCode: "lX",
  bookings: [],
};

book.call(swiss, 222, "HIHI");

// Apply method
const flightData = [123, "George Copper"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
console.log(swiss);

// Bind Method
const bookEw = book.bind(eurowings);


const bookSw = book.bind(swiss);
const bookLx = book.bind(lufthansa);

bookEw(345, "Steven Williams");
const bookEw23 = book.bind(eurowings, 23);
bookEw23("Jonas Schmedtmann");
bookEw23("Martha Coper");
// with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};

document.querySelector(".BUY").addEventListener("click",lufthansa.buyPlane.bind(lufthansa));

// Partial application 
const addTax = (rate, value)=> value + value*rate;
console.log(addTax(0.1,200));
const addVAT = addTax.bind(null,0.23);
console.log(addVAT(100));

const addTax2 = rate => value => {return (value + value * rate ) }

// addTax can also be written as :
function addTax3(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT2 = addTax2(0.23)
console.log(addVAT2(100));
console.log(addTax3(0.2)(100));
