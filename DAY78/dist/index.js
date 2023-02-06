let Result_HTML = document.getElementById("result")
// document.getElementById("num1").value = 1
// document.getElementById("num2").value = 2

function getValue(){
    num1 = parseFloat(document.getElementById("num1").value )
    num2 = parseFloat(document.getElementById("num2").value )
    return num1,num2
}



function add() {
    num1,num2 = getValue()
    result = num1  +  num2 
    Result_HTML.textContent = "Result :"+ result
}

function sub() {
    num1,num2 = getValue()
    result = num1   - num2 
    Result_HTML.textContent = "Result :"+ result
}

function mul() {
    num1,num2 = getValue()
    result = num1   * num2 
    Result_HTML.textContent = "Result :"+ result
}

function div() {
    num1,num2 = getValue()
    result = num1   / num2 
    Result_HTML.textContent = "Result :"+ result
}

function print(num1,num2) {
    console.log( " num1 = " + num1 + "  num2 = " + num2)
}