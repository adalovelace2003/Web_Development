let Elresult = document.getElementById("result");
let a = 0;
let b = 0;
let c = 0;
let x = 0;
let m = 0;
let n = 0;
let o = 0;
let print_ = 0
let XYZ = 0
let condition_1 = 0
function initialize ()
{
a = 0;
b = 0;
c = 0;
x = 0;
m = 0;
n = 0;
o = 0;
XYZ = 1 
condition_1=0
}
function clear_1() {
  Elresult.textContent = 0;
  initialize()
}

function print(c) {
  Elresult.textContent = c;
  // console.log(c)
}

function maths(a, b, o) {
  switch (o) {
    case "+":
      c = a + b;
      print(c);
      break;
    case "-":
      c = a - b;
      print(c);
      break;
    case "*":
      c = a * b;
      print(c);
      break;
    case "/":
      c = a / b;
      print(c);
      break;
    default:
      break;
  }
}

// maths(1,2,"+")
function aa(x) {
    if (XYZ == 1 )
    {
        o = 0,a = 0,b = 0,c = 0,m = 0,n = 0,condition_1=0
    }
    XYZ = 0 
    console.log(x)


/* Condition 1 */
  if (x == "-" || x == "+" || x == "*" || x == "/") {

    o = x;
    print_ = o
    // val()
  }
  /* Do not run condition  2 if condition 1 is correct*/
  console.log("conditon_1 is " + condition_1 )
  if ( condition_1 == 1){
      /* Condition 2 */ console.log("line 78")
    //   also checking the same condition because when first number is pressed, the above condition becomes false which will trigger to run this below condtion which we do not want if we have number
                if (o == "-" || o == "+" || o == "*" || o == "/" )
                {
          n = n*10 + x 
          console.log("line 83 , n =  " + n)
          print_ = n
                    }
    }
    /* Condition 3 */
    console.log("x is "  +  x )
    console.log("o is "  +  o )
     if (o != "-" && o != "+" && o != "*" && o != "/" )
    {
        m = m*10 + x
        console.log("line 93 , m =  " + m)
        print_ = m
    }

    print(print_)

    if (x == "-" || x == "+" || x == "*" || x == "/") {
        condition_1 = 1
      }
  }

function math() {
  maths(m, n, o);
  initialize()
}

// val()
// console.log("a = " + a + " b = " + b )
function val(){
    console.log(" a = " + a +" b = " +b +" c = " + c +" x = " + x  +" i = " + i+" p = " + p +" q = " + q +" operator  = " + o   )
}
initialize()