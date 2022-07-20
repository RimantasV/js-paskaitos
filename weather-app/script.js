import { API_KEY } from "./constants.js";

document.querySelector("form").addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const city = document.querySelector("input").value;
  const weatherData = await getWeatherData(city);
  updateDOM(weatherData);
}

async function getWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return await response.json();
}

function updateDOM(data) {
  const dataContainerEl = document.querySelector(".weather-data");
  dataContainerEl.innerHTML = "";

  const cityAndCountry = `${data.name}, ${data.sys.country}`;

  const cityCountryParagraph = document.createElement("p");
  cityCountryParagraph.textContent = cityAndCountry;
  dataContainerEl.appendChild(cityCountryParagraph);
  const iconImg = document.createElement("img");
  iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  dataContainerEl.appendChild(iconImg);

  const weatherTitle = document.createElement("p");
  weatherTitle.textContent = data.weather[0].main;

  dataContainerEl.appendChild(weatherTitle);
}
