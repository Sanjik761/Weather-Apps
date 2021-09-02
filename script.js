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