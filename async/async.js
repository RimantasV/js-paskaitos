// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);

//// callback

// setTimeout(() => {
//   console.log(11);
//   setTimeout(() => {
//     console.log(22);
//     setTimeout(() => {
//       console.log(33);
//     }, 500);
//   }, 500);
// }, 500);

//// promises

// let myPromise = new Promise((resolve, reject) => {
//   //   resolve("promise resolved successfully");
//   reject("Promise failed");
// });

// console.log(myPromise);

// // then
// // catch

// myPromise
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((x) => {
//     console.log(x);
//   });

// function myFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(111);
//     }, 1000);
//   });
// }

// function myFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve(222);
//       reject("rejected 222");
//     }, 1000);
//   });
// }

// function myFunction3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(333);
//     }, 1000);
//   });
// }

// myFunction1()
//   .then((value) => {
//     console.log(value);
//     return myFunction2();
//   })
//   .then((value) => {
//     console.log(value);
//     return myFunction3();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//// async/await

// async function handlePromises() {
//   try {
//     const a = await myFunction1();
//     console.log(a);
//     const b = await myFunction2();
//     console.log(b);
//     const c = await myFunction3();
//     console.log(c);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromises();

// const randomUserData = fetch(
//   "https://randomuser.me/api/?results=5&gender=female"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async function getRandomUserData() {
//   const response = await fetch(
//     "https://randomuser.me/api/?results=15&gender=male"
//   );
//   const data = await response.json();
//   console.log(data);
// }

// getRandomUserData();

// Uzduotis
// Isitraukti atsitiktini fakta apie kate is
// https://cat-fact.herokuapp.com/facts/random
// ikelti i html kaip pastraipa. Salia turi buti mygtukas, kuri
// spaudziant api butu kvieciamas is naujo ir pakeistu html i nauja
// fakta.

// async function getRandomCatFact() {
//   const response = await fetch(
//     "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
//   );
//   const data = await response.json();
//   console.log(data);
// }

// getRandomCatFact();

// document.querySelector("button").addEventListener("click", getCatFacts);

// async function getCatFacts() {
//   const catsRandomFacts = await fetch(
//     "https://cat-fact.herokuapp.com/facts/random"
//   );
//   const factData = await catsRandomFacts.json();

//   document.querySelector("p").textContent = factData.text;
// }

// html input laukelis, kuriame galima suvesti skaicius nuo 1 iki 500.
// mygtukas, kuri paspaudus istraukiam tiek faktu, kiek suvesta input laukelyje.
// istrauktus faktus keliame i sarasa (ul => li) html'e. Toliau spaudziant mygtuka, sarasas vis
//pasipildo tokiu skaiciumi faktu, kiek yra inpute.

document.querySelector("button").addEventListener("click", getCatFacts);

async function getCatFacts() {
  const inputElement = document.querySelector("input").value;
  const catsRandomFacts = await fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${inputElement}`
  );

  const factData = await catsRandomFacts.json();
  console.log(factData);
  console.log(inputElement);

  if (Array.isArray(factData)) {
    factData.forEach((e) => {
      const listElement = document.createElement("li");
      listElement.textContent = e.text;
      document.querySelector("ul").append(listElement);
    });
  } else {
    const listElement = document.createElement("li");
    listElement.textContent = factData.text;
    document.querySelector("ul").append(listElement);
  }
}
