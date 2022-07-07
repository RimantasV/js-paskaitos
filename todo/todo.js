const formEl = document.getElementsByTagName("form")[0];

formEl.addEventListener("submit", addTodo);

function addTodo(e) {
  // prevents default behaviour of reloading page
  e.preventDefault();

  const inputEl = document.getElementById("input");
  if (inputEl.value.trim().length === 0) {
    inputEl.value = "";
    return;
  }

  const todosEl = document.querySelector(".todos");

  // create list element, add text content from input field,
  // append list element to existing list
  const listEl = document.createElement("li");

  // listen to left mouse click
  listEl.addEventListener("click", function (e) {
    {
      e.target.classList.toggle("completed");
    }
  });

  // listen to right mouse click
  listEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.target.remove();
  });

  listEl.textContent = inputEl.value;
  todosEl.appendChild(listEl);

  //clean input field after submit
  inputEl.value = "";
}
