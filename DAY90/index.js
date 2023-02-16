"use strict";
function calculateTip(bill) {
  let tip = bill > 50 && bill < 300 ? 15 : 20;
  return `${bill + (tip / 100) * bill}`;
}

let bill = 100;
console.log(calculateTip(bill));
