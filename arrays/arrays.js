const myArr = ["string", 1, 2, [1, 2, 3], { name: "Rimantas" }];
const firstElement = myArr[0];
const nestedElement = myArr[3][0];
console.log(nestedElement);

//push - ikeliam elementa i masyvo pabaiga
myArr.push("test");
console.log(myArr);

// unshift  - ikeliam elementa i masyvo pradzia
myArr.unshift("I am first element");
console.log(myArr);

//pop - istrinam elementa is masyvo pabaigos
const removedElement = myArr.pop();
console.log(myArr);
console.log(removedElement);

//shift - istrinam elementa is masyvo pradzios

//slice

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let concatenatedArray = arr1.concat(arr2, arr3);
let concatenatedArray2 = [...arr1, ...arr2, ...arr3];
console.log(concatenatedArray);
console.log(concatenatedArray2);

// kaip nukopijuoti masyva (shallow copy)
let a = 10;
let b = a;
b = b + 5;

console.log(a);
console.log(b);

let array1 = [1, 2, 3, 4, 5, [11, 12, 13]];
// let array2 = Array.from(array1);
// let array2 = array1.slice();
let array2 = [...array1];

array1.push(100);
array2.push(6);
array2[5][0] = 1111;

console.log(array1);
console.log(array2);

// join - joins array elements and return a string
const arrayToJoin = ["I", "love", "javascript"];
const stringFromArray = arrayToJoin.join(" ");

console.log(stringFromArray);

let students = [
  {
    id: 001,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 22,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 002,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 003,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 004,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

const femaleStudents = students.filter((student) => student.gender === "F");
// function isFemale(student) {
//   return student.gender === "F";
// }

console.log(femaleStudents);

// ar yra studentu, kuriu amzius maziau nei 30

const hasStudentsYoungerThan30 = students.some((student) => student.age < 30);
console.log(hasStudentsYoungerThan30);

// ar visi studentai pasirinko bent po du kursus ?

const hasStudentsPikedTwoCourses = students.every(
  (student) => student.courses.length > 1
);

console.log(hasStudentsPikedTwoCourses);

let studentFullNames = students.map((student, index, array) => {
  // console.log(student);
  // console.log(index);
  // console.log(array);
  return index + 1 + " - " + student.f_name + " " + student.l_name;
});
console.log(studentFullNames);

// forEach - same as loop. Executes a function with every element; doesn't return anything
const array10 = ["a", "b", "c"];
array10.forEach((element) => console.log(element));

//reduce
// total paid sum

let totalPaidSum = students.reduce((prev, current) => prev + current.paid, 0);

console.log(totalPaidSum);

//sort

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 1. Filter the list of inventors for those who were born in the 1500's (1500-1599)
// 2. Give us an array of the inventors first and last names
// 3. Sort the inventors by birthdate, oldest to youngest

const invSortByAge = inventors.sort((a, b) => a.year - b.year);
console.log(invSortByAge);

// 4. How many years did all the inventors live all together?

const invLivedTotal = inventors.reduce((a, b) => a + (b.passed - b.year), 0);
console.log(invLivedTotal);

// 5. Sort the inventors by years lived

const invSortByLivedYears = inventors.sort((a, b) => {
  const inventorAYears = a.passed - a.year;
  const inventorBYears = b.passed - b.year;
  return inventorAYears - inventorBYears;
});

console.log(invSortByLivedYears);

// 6. Sort the people alphabetically by first name

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const peopleSortedByName = people.sort((a, b) => {
  const aFirst = a.split(", ")[1];
  const bFirst = b.split(", ")[1];
  return aFirst > bFirst ? 1 : -1;
});

console.log(peopleSortedByName);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const summedMeansOfTransport = data.reduce((prev, current) => {
  if (prev[current]) {
    prev[current]++;
  } else {
    prev[current] = 1;
  }
  return prev;
}, {});

console.log(summedMeansOfTransport);

const filteredArray = [1, 2, 3, 4, 5, 6]
  .filter((el) => el % 2 === 0)
  .map((evenNumber) => evenNumber * 2);

// 7. get an average of array elements
const firstNonConsecutiveInteger = [1, 2, 3, 5, 6, 7, 10]; // 5

const averageOfArray =
  firstNonConsecutiveInteger.reduce((a, b) => a + b, 0) /
  firstNonConsecutiveInteger.length;

console.log(averageOfArray);
// 8.
// find first non-consecutive integer in array
firstNonConsecutiveInteger([1, 2, 3, 5, 6, 7, 10]); // 5
firstNonConsecutiveInteger([1, 2, 3, 4, 5, 6, 10, 9, 8]); // 10

firstNonConsecutiveInteger.find(
  (val, index) => val !== index + firstNonConsecutiveInteger[0]
);
