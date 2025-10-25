const apiKey = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "a51056aa78256bb05cd295a957c89e47"; // You’ll replace this soon

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (city === "") return alert("Please enter a city name");

  const response = await fetch(`${apiKey}${city}&appid=${key}`);
  const data = await response.json();

  if (data.cod === "404") {
    cityName.textContent = "City not found!";
    temperature.textContent = "";
    description.textContent = "";
    weatherIcon.style.display = "none";
  } else {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.style.display = "block";
  }
});