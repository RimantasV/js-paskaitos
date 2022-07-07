// kintamieji (variables)

// let age;
// age = 50;
// // console.log(age);

// const lecture = "Javascript";

// // cannot asign to constant variable
// // lecture = "HTML";

// // myName - rekomenduojama siuo budu pavadinti kintmuosius
// // MY_NAME - konstantos
// // MyName - pavadinti klasems

// // let name = "Rimantas";
// // console.log(name);
// // name = "Jonas";
// // console.log(name);
// // name = "Ausra";
// // console.log(name);

// // //const

// // const sentence = "My name is" + " " + name;
// // const Sentence = `My name is ${name}`;

// // console.log(lecture);
// // console.log(sentence);

// // let userName = prompt("Koks tavo vardas");
// // console.log("Labas" + " " + userName);

// // math operators
// const skaicius1 = 9;
// let skaicius2 = 4;
// skaicius2--;
// console.log(skaicius2);

// const suma = skaicius1 + skaicius2;
// console.log(suma);
// const skirtumas = skaicius1 - skaicius2;
// console.log(skirtumas);
// const sandauga = skaicius1 * skaicius2;
// console.log(sandauga);
// const dalyba = skaicius1 / skaicius2;
// console.log(dalyba);
// const exponent = skaicius1 ** skaicius2;
// console.log(exponent);

// const modulus = skaicius1 % skaicius2;
// console.log(modulus);

// // const x = 10

// // const xSquared = x * x

// let a = 1;
// console.log(a);
// a = a + 1;
// console.log(a);

// a = a + 1;
// a = a + 1;
// a += 1;
// a += 1;
// console.log(a);

// let x = 5 + 5;
// let y = "hello" - 3;
// let z = "Hello" + 5;

// console.log(x, y, z);

// //data types

// //primitive data types

// //string
// let myName = "Rimantas";
// //number
// let myAge = 30; // 20.6/50/NaN/infinity/-infinity
// //boolean true/false
// let isWednesday = true;

// // null
// // undefined

// //bigInt
// let bigNumber = 120145089049840n;
// // symbol // unique value

// let myVariable;
// console.log(typeof Infinity);

// //objects

// //comparison operators

// console.log(5 != "5");
// console.log(5 !== "5");

// console.log(5 > 6);
// console.log(5 >= 4);

// const condition1 = 5 > 4;
// const logicalComparison = condition1 && 10 >= 8 && 50 < 60 && true && !false;
// console.log(logicalComparison);

// let weather = "snow";

// if (weather === "snow") {
//   console.log("Bring a coat.");
// } else if (weather === "rain") {
//   console.log("Bring a rain jacket.");
// } else {
//   console.log("Wear what you have on.");
// }

// //uzduotis

// // paprasom vartotojo ivesti skaiciu su prompt

// // Parašykite if...else sąlygą, kuri:
// // consolė’je atspausdins “lyginis“, jei number yra lyginis skaičius;
// // consolė’je atspausdins „nelyginis“, jei number yra nelyginis skaičius;

// // Įsitikinkite, kad išbandėte savo kodą su skirtingomis number vertėmis.
// // Pvz.: Jei number lygus 1, tada konsolėje turėtų būti atspausdinama “nelyginis”.

// let vartNum = prompt("Ivesk numeri:");
// let isEven = vartNum % 2 === 0;

// if (isEven) {
//   console.log("Lyginis skaicius");
// } else {
//   console.log("Nelyginis skaicius");
// }

let vartNum = 6;

let isNumberEven = vartNum % 2 === 0 ? true : false;

if (vartNum % 2 === 0) {
  isNumberEven = true;
} else {
  isNumberEven = false;
}

// vartotojas suveda balus

// jeigu yra 100 balu, konsoleje parasom Puiku
// jeigu suveda tarp 90-99, konsoleje parasom labai gerai
// jeigu 70-89 - gerai
// jeigu maziau jei 70  - blogai

// let balai = prompt("Iveskite balus");

// if (balai > 100 || balai < 0) {
//   console.log("neteisingi duomenys");
// } else if (balai == 100) {
//   console.log("puiku");
// } else if (90 <= balai) {
//   console.log("labai gera");
// } else if (70 <= balai) {
//   console.log("gerai");
// } else if (balai < 70) {
//   console.log("blogai");
// }

let savaitesDiena = 4;

if (savaitesDiena === 1) {
  console.log("pirmadienis");
} else if (savaitesDiena === 2) {
  console.log("antradienis");
} else if (savaitesDiena === 3) {
  console.log("treciadienis");
} else if (savaitesDiena === 4) {
  console.log("ketvirtadienis");
} else if (savaitesDiena === 5) {
  console.log("penktadienis");
} else if (savaitesDiena === 6) {
  console.log("sestadienis");
} else if (savaitesDiena === 7) {
  console.log("sekmadienis");
}

//switch

switch (savaitesDiena) {
  case 1:
    console.log("pirmadienis");
    break;
  case 2:
    console.log("antradienis");
    break;
  case 3:
    console.log("antradienis");
    break;
  case 4:
    console.log("antradienis");
    break;
  case 5:
    console.log("antradienis");
    break;
  case 6:
    console.log("antradienis");
    break;
  case 7:
    console.log("antradienis");
    break;
  default:
    console.log("blogi duomenys");
}

if (savaitesDiena >= 1 && savaitesDiena <= 5) {
  console.log("darbo diena");
} else if (savaitesDiena === 6 || savaitesDiena === 7) {
  console.log("savaitgalis");
} else console.log("blogai ivesti duomenys");

switch (savaitesDiena) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("darbo diena");
    break;
  case 6:
  case 7:
    console.log("savaitgalis");
    break;
  default:
    console.log("neteisinga diena");
}

// ternary operator

//condition ? <expression if true> : <expression if false></expression>
savaitesDiena >= 1 && savaitesDiena <= 5
  ? console.log("darbo diena")
  : savaitesDiena === 6 || savaitesDiena === 7
  ? console.log("savaitgalis")
  : console.log("blogai ivesti duomenys");

function removeNumbers(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += Number.isInteger(Number.parseInt(str[i])) ? "" : str[i];
  }
  return result;
  // return str.replace(/\d/g, "");
}
