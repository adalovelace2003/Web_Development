
let bill
bill = Number(prompt("Enter bill amount"))
let tip =  bill >50 &&  bill <300 ? 15 :20 

let finalBill = bill + ((tip/100) * bill)

alert(`Bill amount is ${finalBill}`)
console.log(tip)



