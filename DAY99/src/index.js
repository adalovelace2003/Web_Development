"use strict";

const resturant = {
  Rname: "Classico Italinio",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}  will be delivered to ${address} on ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

// resturant.orderDelivery({
//   time: "22:30",
//   address: "Via Del Sole,21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// Destructure Objects

// const { Rname, openingHours, categories } = resturant;
// // console.log(Rname, openingHours, categories);

// const {
//   Rname: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = resturant;

// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = resturant;

// console.log(menu);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };

// console.log(a, b);

// ({ a, b } = obj);

// console.log(a, b);

// const {
//   fri: { open, close },
// } = openingHours;

// console.log(open, close);

// //  Deconstructing of ARRAYS

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log([x, y, z]);

// let [main, secondary] = resturant.categories;
// console.log(main, secondary);

// // switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = resturant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [1, 2, 3, [4, 5, 6]];

// const [i, , , j] = nested;
// const [, , , [m, n, o]] = nested;

// console.log(i);
// console.log(j);

// console.log(m);
// console.log(n);
// console.log(o);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [3, 4, 5];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...resturant.mainMenu, "Gnocci"];
// console.log(newMenu);

// Copy arry

// const MainMenuCopy2 = resturant.mainMenu;
// console.log(MainMenuCopy2);

// const MainMenuCopy = [...resturant.mainMenu];
// console.log(MainMenuCopy);

// const bothMenu = [...resturant.starterMenu, ...resturant.mainMenu];
// console.log(bothMenu);

// Real World Example
// const ingredients = [
//   prompt("Let's make pasta ! Ingredient 1?"),
//   prompt("Let's make pasta ! Ingredient 2?"),
//   prompt("Let's make pasta ! Ingredient 3?"),
// ];

// console.log(ingredients);

// resturant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// resturant.orderPasta(...ingredients)

// Objects

// const newResturant = {foundedIn:1991,...resturant,founder:"Guiseppe"}
// console.log(newResturant);

// const resturantCopy = {...resturant}

// resturantCopy.Rname = "Ristrorante Roma"
//
// console.log(resturantCopy.Rname);
// console.log(resturant.Rname);

//  Rest Pattern
//
// const arr3 = [...arr,1,2]
// console.log(arr3);
//

// const [a,b,...others] = [1,2,3,4,5]
// console.log(others);

// const [pizza,,Risotto,...otherFood] = [...resturant.mainMenu,...resturant.starterMenu]

// console.log(otherFood);

// Objects

// const {sat,...weekdays} = resturant.openingHours

// console.log(weekdays);

// const {thu: {open,close}}= weekdays
// console.log(open,close);

// const {thu: {...time}}= weekdays
// console.log(time);

// const { openingHours: { thu: { ...time } } } = resturant;
// console.log(time);

// console.log(time.open);

// const add = function (...numbers) {
// let sum = 0;
// for (let number of numbers) sum += number
// console.log(sum);
// };

// add(2,3)
// add(2,3,4)
// add(2,3,4,5)
// add(2,3,4,5,6)
// add(2,3,4,5,6,7)

// const x = [23,5,7]
// add(...x)

// resturant.orderPizza(1,2,3)
//
// resturant.orderPizza("mushroom","onion","cheese")
//
// resturant.orderPizza("mushroom")

// short circuiting
// -> if the first value is truth , it will immediately return

// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || undefined);

// resturant.numGuests = 0;
// const guests1 = resturant.numGuests ? resturant.numGuests : 10;
// console.log(guests1);

// const guest2 = resturant.numGuests || 20;
// console.log(guest2);

// //  If there is really 0 guest in the resturant, it will swill print 10, which is the problem for us

// //nullish value
// // null, undefined ( not "" or 0)
// const guestCorrect = resturant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: "Carpi",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "Marpi",
//   owner: "Giovani Rossi",
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; 
// rest1.numGuests ||= 10;
// rest1.numGuests ??= 10;

// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10; 
// rest2.numGuests ||= 10;
// rest2.numGuests ??= 10;




//  this will put the owner name to anonymous where there is now owner name mentioned
// rest1.owner ??= "Anonymous"
// rest2.owner ??= "Anonymous"

// console.log(rest1);
// console.log(rest2);

// this will change the name of the owner to anonymous if there is the name of the owner.
// rest1.owner &&= "Anonymous"
// rest2.owner &&= "Anonymous"

// console.log(rest1);
// console.log(rest2);



// console.log(0 && "Jonas");
// console.log("" && "Jonas");
// console.log(true && 0);
// console.log(undefined && null);
// console.log(null && undefined);

/* 
OR -> shortcircuit when truthy value is encountered
AND -> shortcircuit when falsy value is encountered
*/

//  Practical implementaion for &&

// if(resturant.orderPizza){
//     resturant.orderPizza("mushroom","spinach")
// }

// resturant.orderPizza && resturant.orderPizza("mushroom","spinach")
