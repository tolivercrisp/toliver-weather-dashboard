// global api key
var api_key = '1010ae095ef26a48fc294141617d504c';

// DOM element variables

// Search Bar
var searchBtn = document.getElementById("searchBtn")
// Variables -- Current Weather
var currentTemp = document.getElementById("current_temp");
var currentWind = document.getElementById("current_wind");
var currentWindGust = document.getElementById("current_wind_gust");
var currentHumidity = document.getElementById("current_humidity");
// One Day
var OneDayDate = document.getElementById("2_date");
var OneDayTemp = document.getElementById("2_temp");
var OneDayWind = document.getElementById("2_wind");
var OneDayHumidity = document.getElementById("2_humidity");
// Two Days
var TwoDayDate = document.getElementById("2_date");
var TwoDayTemp = document.getElementById("2_temp");
var TwoDayWind = document.getElementById("2_wind");
var TwoDayHumidity = document.getElementById("2_humidity");
// Three days
var ThreeDayDate = document.getElementById("3_date");
var ThreeDayTemp = document.getElementById("3_temp");
var ThreeDayWind = document.getElementById("3_wind");
var ThreeDayHumidity = document.getElementById("3_humidity");
// Four Days
var FourDayDate = document.getElementById("4_date");
var FourDayTemp = document.getElementById("4_temp");
var FourDayWind = document.getElementById("4_wind");
var FourDayHumidity = document.getElementById("4_humidity");
// Five Days
var FiveDayDate = document.getElementById("5_date");
var FiveDayTemp = document.getElementById("5_temp");
var FiveDayWind = document.getElementById("5_wind");
var FiveDayHumidity = document.getElementById("5_humidity");

// displays current time
function displayTime() {
    var time = moment();
    console.log(time)
    var currentTime = document.getElementById("current_time")
    currentTime.innerHTML = moment().format("h:mm a");
}
displayTime()

// search if the search button is clicked
document.getElementById("searchBtn").addEventListener("click", function(event) {
  event.preventDefault()
  displayWeather()
})
// search if the Enter key is pressed
document.getElementById("searchBtn").addEventListener("keyup", function(event) {
  if (event.keycode === 13) {
    event.preventDefault();
    displayWeather()
    }
});

// big ol function that handles everything regarding weather
function displayWeather () {
  var cityName = document.getElementById("search_input").value

  // (1) geolocator
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${api_key}`)
  .then(function (response) {
      return response.json()
    }) .then(function (data) {
      console.log(data);

        // (2) forecast weather
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=imperial&appid=${api_key}`)
      .then(function (response) {
          return response.json()
        }) .then(function (data) {
          console.log(data);

          // (3) current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=${api_key}`)
        .then(function (response) {
            return response.json()
          }) .then(function (data) {
          console.log(data);
        });
        });
    });

    

    document.getElementById("city").innerHTML = cityName.toUpperCase();


// currentTemp
// currentWind
// currentWindGust
// currentHumidity











}





