let bodyEl = document.querySelector("body");

bodyEl.addEventListener("submit", funcAddListEl);

let ulAddEl = document.createElement("ul");
bodyEl.appendChild(ulAddEl);

function funcAddListEl(e) {
  e.preventDefault();

  let inputEl = document.querySelector("input");
  // IF empty ///////////////////////////////

  if (inputEl.value == "") {
    alert("Empty");
  } else {
    let liAddEl = document.createElement("li");
    liAddEl.innerText = inputEl.value;

    ulAddEl.appendChild(liAddEl);

    // Right mouse click <TOGGLE> ////////////////////////////////

    liAddEl.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      //   liAddEl.style.textDecoration = "line-through";
      liAddEl.classList.toggle("completed");
    });

    // Left mouse click <DELETE> ////////////////////////////////

    liAddEl.addEventListener("click", function (e) {
      e.target.remove();
    });
  }
}
