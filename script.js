import {nodeCreator, chainAppend} from './nodeCreator.js';

const apiKey = 'fb39d41526d21022f068615f1b9f8a6d';
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const container = document.getElementById("container")
const display = document.querySelector("body")


submit.addEventListener('click', (e) => {
  e.preventDefault()
  container.textContent = ""
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}`,
    { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      const temperature = document.createElement("span")
      const icon = document.createElement("span")
      icon.textContent = "°C"
      temperature.textContent = (response.main.temp - 273.15).toFixed(1)
      const status = document.createElement("p")
      status.textContent = response.weather[0].main
      const result = document.createElement("button")
      result.textContent = "button"
      container.appendChild(temperature)
      container.appendChild(icon)
      container.appendChild(status)
      container.appendChild(result)
      setBackground(status, display)
      result.addEventListener("click", () => {
        if (icon.textContent === "°C") {
          temperature.textContent = ((temperature.textContent * 9 / 5) + 32).toFixed(1)
          icon.textContent = "°F"
        }
        else if (icon.textContent === "°F") {
          temperature.textContent = ((temperature.textContent - 32) * 5 / 9).toFixed(1)
          icon.textContent = "°C"
        }
      })
    })
    .catch(function (error) {
      console.log("city not found");
    })
})

function setBackground(text, body) {
  if (text.textContent === 'Clear') {
    body.style.backgroundImage = 'url(https://crookedhouse.typepad.com/.a/6a00e54ecc66978833015436bd8897970c-800wi)';
  } else if (text.textContent === 'Rain') {
    body.style.backgroundImage = 'url(https://cdn.oxu.az/uploads/W1siZiIsIjIwMTcvMDUvMTQvMTQvMzYvMjUvNjAvaGF2YSB4ZWJlcmRhcmxpcS5qcGciXV0?sha=fa22a8da0ced0d7d)';
  } else if (text.textContent === 'Drizzle') {
    body.style.backgroundImage = 'url(https://img.wallpapic.com/i2463-231-815/medium/drizzle-nature-rain-drop-wallpaper.jpg)';
  } else if (text.textContent === 'Thunderstorm') {
    body.style.backgroundImage = 'url(https://images.hindustantimes.com/img/2021/06/16/1600x900/9466e14c-ce4d-11eb-bff4-4a0252eebc23_1623812647983.jpg)';
  } else if (text.textContent === 'Clouds') {
    body.style.backgroundImage = 'url(https://lh3.googleusercontent.com/proxy/f3rM35hhyBCqQJTn4CNrGtmypbY-tHbrEHBZ8lyUHNCHmXkFH7Hdko7X81bMWA_PwpONHK16TymXC54CYzLMQ0Q)';
  } else if (text.textContent === 'Snow') {
    body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3524946.jpg)';
  } else {
    body.style.backgroundImage = 'url(https://static8.depositphotos.com/1323913/913/v/600/depositphotos_9137386-stock-illustration-vector-weather-forecast-icons-part.jpg)';
  }
}