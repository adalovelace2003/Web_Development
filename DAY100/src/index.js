const weekdays = ["mon", "tue", "wed", "thu", "fri"];

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
}

const openingHours = {
  [weekdays[3]]: {
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
};

("use strict");

const resturant = {
  Rname: "Classico Italinio",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   openingHours:openingHours,

  // ES6 defintion
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    // console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}  will be delivered to ${address} on ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(...otherIngredients);
  },
};

for (const day of Object.keys(openingHours)) {
  // console.log(day);
}

const menu = [...resturant.starterMenu, ...resturant.mainMenu];
// console.log(menu);
// for (const item of menu) console.log(item);
// console.log(menu.length);

// for (const item of menu.entries()) console.log(`${item[0+1] }`);
// console.log(1111111111);
// for (const [i,el] of menu.entries()) console.log(`${i+1}: ${el}`);

if (resturant.openingHours.mon && resturant.openingHours) {
  // console.log(resturant.openingHours.mon.open);
}

// Optional Chaining
// console.log(resturant.openingHours.mon?.open);

// console.log(resturant.openingHours?.fri?.open);

const orderSet = new Set(["pasta", "pizza", "burger", "pasta"]);

console.log(orderSet);

console.log(orderSet.size);

for (const order of orderSet) console.log(order);

const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

console.log(staff);
console.log(typeof{staff});
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(typeof staffUnique);



const rest = new Map();
rest.set('name','calssico italinao')
rest.set(1,'italy')
rest.set(2,'rome')


console.log(  rest.set('categories',[...resturant.mainMenu]));



// Optional Chaining
// Maps
// Sets



Day 100
March 23 || #Day100 || 21:55 ||
Today, I learned about:
1. Optional
2. Chaining
3. Sets
.
.
.
.
.
.
.
Reference: || Jonas Schmedtmann ||
Github : https://github.com/adalovelace2003/Web_development/
#mrslovelace01
#codingchallenge #Day_100_of_clg_askmitra #itsnp