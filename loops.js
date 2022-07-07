"use strict";

// loops

// while

let i = 2;

while (i < 11) {
  console.log(i);
  //i = i + 1;
  i++;
}

// do while

let j = 11;

do {
  console.log(j);
  j++;
} while (j < 11);

// for

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// data types: objects

// array (masyvas)
const myArray = [1, 2, "javascript", [1, 2.5]];

myArray[0] = "vienetas";
myArray[myArray.length] = "penktas";
myArray.push("naujas elementas");
// myArray.pop();

console.log(myArray);

console.log(myArray[myArray.length - 1]);

// object (object)

let myObject = {
  "first name": "Rimantas",
  programingLanguage: "Javascript",
  1: true,
};
myObject["first name"] = "Jonas";
myObject["last name"] = "Vilcinskas";

console.log(myObject);

// // parayti while cikla kuris atspausintu visus lyginius skaicius nuo 2 iki 10
// while (x < 11) {
//   if (x % 2 === 0) {
//     console.log(x);
//   }
//   x++;
// }
// // parayti for cikla kuris atspausintu visus lyginius skaicius nuo 2 iki 10
// for (let y = 1; y <= 10; y++) {
//   if (y % 2 === 0) {
//     console.log(y);
//   }
// }
// // parasyti cikla kuris atspausintu visas masyvo vertes
// let myArray = [[1, 2.5], "name", 55, "myObect", ["letter", 55, 78]];

// for (let y = 0; y < myArray.length; y++) {
//   console.log(myArray[y]);
// }

console.log(window);

window.console.log("qqq");
