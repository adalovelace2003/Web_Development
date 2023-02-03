let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function print(){
    countEL.textContent = count
}

function incrementCount() {
    count+=1
    print()
}

function decrementCount() {
    /* Do not decrease the value less than zero. */
    if (count !=0 ) 
        count-=1
    print()
}

function reset() {
    count = 0
    print()
}

function save() {
    let countStr = count + " ~ "
    saveEl.textContent += countStr
}

function clearSave() {
    saveEl.textContent = "Previous entries :   "
}

let username = "Ada"
let message = "Welcome to People Counter!"
let messageToUser = username+", "+ message

console.log(messageToUser)

