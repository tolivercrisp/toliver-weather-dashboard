// DOM element variables

// Search Bar
var searchBtn = document.getElementById("searchBtn")

// Variables -- Current Weather
var currentTemp = document.getElementById("current_temp");
var currentWind = document.getElementById("current_wind");
var currentWindGust = document.getElementById("current_wind_gust");
var currentHumidity = document.getElementById("current_humidity");

// Variables -- Five Day Forecast

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
var apiKey = '1010ae095ef26a48fc294141617d504c';

// fetch OpenWeatherMap API
function fetchWeather () {
    // query selectors for the url
    // the city that the API fetches is the value of the users search input
    // var lat = document.getElementById("latitude").value;
    // var lon = document.getElementById("longitude").value;
    var city = 'Dallas'
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid'+apiKey)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}
fetchWeather()
// document.getElementById("searchBtn").addEventListener("click", fetchWeather)

// ill also need to use the geocoder api to turn the cordinates into city namers



var currentForecast = document.getElementById('current_forecast')


//Forecast Cards

// search function (reset)