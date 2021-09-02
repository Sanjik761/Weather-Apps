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


})