import axios from "axios";

let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = (`0` + now.getMinutes()).slice(-2);
let apiKey = "5201594abea9f3e38b70e65b11a80c24";
let cityInput = document.querySelector("#city-input");
let temperatureInput = document.querySelector("#temperature");
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}&units=metric`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

today.innerHTML = `${day}, ${month} ${date} ${hour}:${minutes}`;

function handleSubmit(event) {
  event.preventDefault();
  city.innerHTML = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let currentTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${currentTemp}°C`;
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

axios.get(apiUrl).then(showTemperature);

function showPosition(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);
