"use strict";

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//  Sets
const events = new Set(gameEvents.values());
//   console.log(events);

// 2.

// (gameEvents.delete("64"));
// console.log(gameEvents);
//

// 3.
// console.log([...gameEvents.keys()].pop());

const airline = "TAP Air Portugal";
const plane = "A320";

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4))
// console.log(airline.slice(4,7))

// console.log(airline.slice(0,airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ")+1));

// console.log(airline.slice(-10));

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("middle seat");
  else console.log("lucky");
};

// checkMiddleSeat("11E")
// checkMiddleSeat("11B")
// checkMiddleSeat("11C")
// checkMiddleSeat("11A")

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = "jOnas";

// console.log((passenger.toLowerCase()) );

// const email = "hello@hello.io"
// const loweremail = "   Hello@hello.IO"

// console.log(email);
// console.log(loweremail.toLowerCase().trim());

// // replacing
// const priceGB = "288.97E"
// const priceUs = priceGB.replace("E","$")

// console.log(priceGB);
// console.log(priceUs);

// const msg = "hi hi hi hello bro 123 test 123 testy test"

// console.log(msg);

// console.log(msg.replace("hi","hiii"));

// console.log(msg.replace(/hi/g,"hiii"));

// const plane2 = "Airbus A123neo"
// console.log(plane2.includes("A123"));

// console.log(plane2.startsWith("Airbus") && plane2.endsWith("neo"))

// console.log("a+very+nice+string".split("+"));

// // console.log("Ada Lovelace".split(" "));

// const[firstName,lastName] = "Ada Lovelace".split(" ")

// console.log(firstName,lastName);

// const newName = ["Ms." ,firstName,lastName.toUpperCase()].join(" ")

// console.log(newName);

// const capitalizeName = function(name){
//  const names = name.split(" ");
//  const namesUpper = []

//  for (const n of names ){
//     namesUpper.push((n[0].toUpperCase()) + n.slice(1))
//  }
//  console.log(namesUpper.join(" "));
// }

// capitalizeName("jesica ann smith davis")
// capitalizeName("jonas scheddman")

// // padding

// const messagee = "goto gate 23!";
// console.log(messagee.padStart(23,"+").padEnd(35,"-"));
// const maskCredit =(number)=> {
//     const str = number + ""
//     const last = str.slice(-4)
//     return last.padStart(str.length,"*")

// }

// console.log(maskCredit(123412342341324))
// console.log(maskCredit(12315645654))
// console.log(maskCredit(1231561))

// const mesage2 = "Bad weather.. All Departures Delayed";
// console.log(mesage2.repeat(5))

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// let text = "hello_bro"
// let index = text.indexOf("_");
// text = text.replace("_","");
// text =  text.replace(text[index],text[index].toUpperCase() )

// // console.log(text);

// let text = "hi_bro hello_bro haha_bro";

// text = text.split(" ");
// console.log(text);

// for (let t in text) {
//   let index = text[t].indexOf("_");
//   text[t] = text[t].replace("_", "");
//   text[t] = text[t].replace(text[t][index], text[t][index].toUpperCase());
// }

// console.log(text);


let flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


flights = (flights.split("+"));



let i = 0;
for ( let flight of flights){
    flights[i] =  (flight.slice(1,flight.indexOf(";") ).replace("_"," ") + " = " + flight.slice(flight.lastIndexOf(";")+1,flight.length ));
    i++;
}

for(let flight of flights) console.log(flight);













// let delayed_departure = flights[0];
// let arrival = flights[1];
// let delayed_arrival = flights[2];
// let departure  = flights[3];




// let flight = "_Delayed_Departure;fao93766109;txl2133758440;11:25";
// console.log(flight);

// // console.log(flight.slice(1,flight.indexOf(";") ).replace("_"," ") + " = " + flight.slice(flight.lastIndexOf(";")+1,flight.length ));
// console.log(flight.length)





