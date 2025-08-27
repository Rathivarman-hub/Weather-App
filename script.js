const apikey = "98b6812d7579768d1f3c8f4bebc32508";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {

  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }

document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
})