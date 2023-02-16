"use strict";
function calculateTip(bill) {
  let tip = bill > 50 && bill < 300 ? 15 : 20;
  return `${(tip / 100) * bill}`;
}

function calcAvg(array) {
    let avg = 0;
  for (let items of array) {
    avg += Number(items)
  }
  return (avg/array.length );
}

let tip = [];
let totalBill = [];
let bill = [100, 22, 285, 174, 440, 34, 105, 10, 1100, 56, 52];

let i = 0;
for (let items of bill) {
  tip[i] = calculateTip(bill[i]);
//   console.log(tip[i]);
  totalBill[i] = bill[i] + Number(tip[i]);
//   console.log(totalBill[i]);
  i++;
}

console.log(calcAvg(totalBill))