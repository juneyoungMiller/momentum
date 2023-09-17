const emoji = {
  clear: "☀️",
  rain: "🌧️",
  snowy: "☃️",
  clouds: "☁️",
};


function onGeoOk(position) {
  const lat=  position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY ="6e0841167fd27ad036eeaba04e3ad39c";
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
 
  fetch(url).then(response => response.json()).then(data => {
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");

  city.innerText = data.name;
  const weatherCondition = data.weather[0].main.toLowerCase();
  const temp = data.main.temp;

  //calculate Fahrenheit // ${data.main.temp}°C
  const temF = Math.floor((temp *9/5) + 32);

  const weatherEmoji = emoji[weatherCondition] || data.weather[0].main
  weather.innerText = `${weatherEmoji} / ${temF}°F`;
 } );
}

function onGeoError() {
  alert("Cant find you, No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);