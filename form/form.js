// susikurti listeneri submit eventui, kad galetume atlikti duomenu validacija
// pasiselectinti input laukelius
// tikrinsim input laukeliu vertes, ar jos yra uzpildytos, ir jeigu ne, tuomet parasysime klaidos zinute
// jeigu duomenys uzpildyti teisingai, nformuoti vartotoja ir istrinti ivestus duomenis

let formEl = document.querySelector("form");

let userNameEl = document.getElementById("username");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let passwordEl2 = document.getElementById("password2");
let errorsEl = document.querySelectorAll(".error");

formEl.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  validateInput(userNameEl, 0, "Username cannot be empty");
  validateInput(emailEl, 1, "Email cannot be empty");
  validateInput(passwordEl, 2, "Password cannot be empty");
  validateInput(passwordEl2, 3, "Password 2 cannot be empty");

  if (
    userNameEl.value !== "" &&
    emailEl.value !== "" &&
    passwordEl.value !== "" &&
    passwordEl2.value !== ""
  ) {
    if (passwordEl.value !== passwordEl2.value) {
      errorsEl[3].textContent = "passwords must match";
      return;
    }

    alert("form submitted successfully!");
    userNameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";
    passwordEl2.value = "";
  }
}

function validateInput(inputEl, errorIndex, errorMessage) {
  if (inputEl.value === "") {
    errorsEl[errorIndex].textContent = errorMessage;
    inputEl.style.border = "1px solid red";
  } else {
    errorsEl[errorIndex].textContent = "";
    inputEl.style.border = "1px solid grey";
  }
}

// uzduotis
// sukurti input laukeli kur varotojas pakatroru slaptazodi
// jeigu jis neuzpildytas, gauname klaida raudonu tekstu, kad turi buti uzpildytas
// jeigu nesutampa su pirmu slaptazodziu, turi buti klaidos tekstas, jog slaptazodis nesutampa
// jeigu slaptazodziai sutampa, tuomet galime submittinti forma

//uzduotis

// pvz [1,2,58,9,-9]

//parasyti funkcija, kuri priiims skaiciu masyva kaip parametra
//ir grazins teigiamu masyvo skaiciu suma

function sumPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumPositive([1, 2, 58, 9, -9]));
