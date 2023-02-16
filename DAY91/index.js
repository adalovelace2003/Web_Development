//  OOPS
"use strict";
const mark = {
  firstName: "mark ",
  lastName: "Schemdtrann",
  birthYear: 2003,
  age: 2022 - 2002,
  job: "teacher",
  friends: ["Micahel", "John", "harry"],
  hasDriversLicense: true,


};
const jonas = {
  firstName: "Jonas ",
  lastName: "Schemdtrann",
  birthYear: 2003,
  age: 2022 - 2002,
  job: "teacher",
  friends: ["Micahel", "John", "harry"],
  hasDriversLicense: true,

  //   calcAge: function () {
  //     return 2023 - this.birthYear;
  //   }

  calcAge: function () {
    this.age2 = 2037 - this.birthYear;
    return this.age2;
  },

  getSummary: function () {
    console.log("********** Summary ***********");
    console.log(`firstName : ${this.firstName}`);
    console.log(`lastName : ${this.lastName}`);
    console.log(`birthYear : ${this.birthYear}`);
    console.log(`age : ${this.age}`);
    console.log(`job : ${this.job}`);
    console.log(`friends : ${this.friends}`);
    console.log(`hasDriversLicense : ${this.hasDriversLicense}`);
    console.log("*******************************");
  },
  nameMassHeight: function (mass, height) {
    this.fullname = this.firstName + " " + this.lastName;
    this.mass = mass;
    this.height = height;
  },
  calcBMI: function (mass, height) {
    this.nameMassHeight(mass, height);
    this.bmi = Number(this.mass) / Number(this.height) ** 2;
    return this.bmi;
  },
  makeArrayVal: function () {
    let array = [];
    let count = 0;
    for (let property in this) {
      if (count < 7) {
        // console.log(this[property]);
        array[count] = this[property]
        count++;
      }
    }
    // 
    // for (let item of array) {
        // console.log(item);
    //   }
    return array;
  },




};

const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(" WHat do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends" );
const interestedIn = "age";
// if (jonas[(interestedIn)]) {
// console.log(jonas[interestedIn]);
// }
// else
// {
// console.log("Value does not exist");
// }
jonas.location = "Portugal";
jonas["twitter"] = "Hello";
// console.log(`${jonas.firstName} has ${jonas["friends"].length} and his best friend is ${jonas.friends[0]}            `)
// console.log(jonas.calcAge(2003));
// console.log(jonas["calcAge"]());

// jonas.getSummary()
// console.log(jonas.calcBMI(70, 1.5));
