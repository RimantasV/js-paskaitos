document.querySelector("form").addEventListener("submit", paverstFarenh);

function paverstFarenh(e) {
  document.querySelector("ul").innerHTML = "";
  e.preventDefault();
  tempCels = document.querySelector("input").value;
  console.log(tempCels);
  let listItem = document.createElement("li");
  listItem.textContent = `Temperatura Celsijais yra ${tempCels}`;
  document.querySelector("ul").appendChild(listItem);
  tempFar = tempCels * 1.8 + 32;
  console.log(tempFar);
  let listItem2 = document.createElement("li");
  listItem2.textContent = `Temperatura Farenheitais yra ${tempFar}`;
  document.querySelector("ul").appendChild(listItem2);
}
