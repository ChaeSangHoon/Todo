const API_KEY = "675aa24a78f8cab5ed3b206d783cc853";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weather = document.querySelector("#weather h4:first-child");
      const city = document.querySelector("#weather h4:last-child");
      weather.innerText = date.name;
      city.innerText = `${date.weather[0].main}/${date.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
