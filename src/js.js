function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = searchInputElement.value;

  let apiKey =  "684391fb9be129et40f040f4bb35oaff";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayData);
}

function displayData(response) {
let temperature =  Math.round(response.data.temperature.current);
let humidity = (response.data.temperature.humidity);
let wind = (response.data.wind.speed);
let windElement = document.querySelector("#wind");
let humidityElement = document.querySelector("#humidity");
let temperatureElement = document.querySelector(".current-temperature-value");
temperatureElement.innerHTML = temperature;
humidityElement.innerHTML = `${humidity}%`;
windElement.innerHTML = `${wind}km/h`;
}


function formatDate(date) {

 
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);