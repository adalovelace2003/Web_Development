"use strict";
let numbers = [];
function editDot(numbers, boolean) {
  if (boolean) {
    for (let item of numbers) {
      document.getElementsByTagName("span")[item - 1].style.opacity = "100%";
      document.getElementsByTagName("span")[item - 1].innerHTML = "&bull;";
    }
  } else {
    for (let item of numbers) {
      //   document.getElementsByTagName("button")[item - 1].innerHTML = "";
      document.getElementsByTagName("span")[item - 1].style.opacity = "75%";
    }
  }
}

function clear() {
  for (let i = 0; i <= 8; i++) {
    document.getElementsByTagName("span")[i].innerHTML = "";
  }
}

function unClear() {
  for (let i = 0; i <= 8; i++) {
    document.getElementsByTagName("span")[i].innerHTML = "&bull;";
  }
}


// document.querySelector(".dice").addEventListener("click", function () {
//   // shuffleDots();
//   setTimeout(() => {
//     clear();
//     let randNum = Math.ceil(Math.random() * 6);
//     if (randNum == 1) {
//       document.getElementsByTagName("span")[4].innerHTML = "&bull;";
//     } else {
//       editDot(numberArray(randNum), 1);
//     }
//     // Decreasing the opacity of the dice points after 1.5s of displaying
//     setTimeout(() => {
//       try {
//         editDot(numberArray(randNum), 0);
//       } catch (error) {
//         console.error(
//           "An error occurred while executing the editDot function: This is because , you pressed the dice button faster than 750ms",
//           error
//         );
//       }
//     }, 750);
//   }, 100); //1900
// });

function numberArray(numbers) {
  switch (numbers) {
    case 2:
      return [4, 6];
      break;
    case 3:
      return [4, 5, 6];
      break;
    case 4:
      return [1, 3, 7, 9];
      break;
    case 5:
      return [1, 3, 5, 7, 9];
      break;
    case 6:
      return [1, 2, 3, 7, 8, 9];
      break;
    default:
      break;
  }
}
