let headingEl = document.getElementById("heading");
console.log(headingEl);

let headingEl2 = document.getElementsByTagName("h1");
console.log(headingEl2);

let paragraphsEl = document.getElementsByTagName("p");
console.log(paragraphsEl);

let greenListItemsEl = document.getElementsByClassName("list-item");
console.log(greenListItemsEl);

let listItemEl = document.querySelector("li");
console.log(listItemEl);

let listItemsEl = document.querySelectorAll("li");
console.log(listItemsEl);

headingEl.textContent = "pakeistas pavadinimas";
headingEl.style.backgroundColor = "red";
headingEl.style.fontSize = "36px";

let divEl = document.querySelectorAll(".container")[0];
console.log(divEl);

// modify html
// divEl.textContent = "test";
// divEl.innerHTML = "<p>Labas</p><p>Vakaras</p>";

//modify css

let firstParagraphEl = document.querySelector(".first-paragraph");
firstParagraphEl.classList.add("green");

for (let i = 0; i < listItemsEl.length; i++) {
  listItemsEl[i].classList.toggle("green");
}

let divCreatedWithJs = document.createElement("div");
divCreatedWithJs.style.backgroundColor = "yellow";
divCreatedWithJs.style.height = "50px";

divCreatedWithJs.setAttribute(
  "style",
  "background-color: blue; font-size: 50px"
);

let paragraphEl = document.createElement("p");
paragraphEl.textContent = "I am paragraph created with JS";
divCreatedWithJs.appendChild(paragraphEl);

let bodyEl = document.querySelector("body");

bodyEl.appendChild(divCreatedWithJs);

console.log(bodyEl);

console.log(min(3, -1));

function min(a, b) {
  //   if (a > b) {
  //     return b;
  //   } else {
  //     return a;
  //   }
  let answer = a < b ? a : b;
  return answer;
}

const minArrow = (a, b) => (a < b ? a : b);

console.log(minArrow(5, 2));

document.addEventListener("click", (e) => {
  let a = 2;
  let b = 3;
  console.log(a + b);
});

// function handleClick(e) {
//   console.log(e);
// }

// click - peles kairio mygtuko paspaudimas
// contextmenu - peles desinio mygtuko paspaudimas
// submit - kai forma yra submittinama

// function alertOnClick() {
//   alert("mouse clicked");
// }
