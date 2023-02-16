const day = "monday";

switch (day) {
  case "monday":
    console.log("MONDAY");
    break;
  case "sunday":
    console.log("HOLIDAY");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Tue or Wed");
  default:
    console.log("Not a valid day");
}

let age = 19;
age >= 10
  ? console.log("age is greater or eql to 10 ")
  : console.log("Age is less than 10");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${ age >=18 ?'wine' :'water'}  `);
