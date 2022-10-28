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
document.getElementById("");
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

// fetch OpenWeatherMap API
function fetchWeather () {
    // query selectors for the url
    // the city that the API fetches is the value of the users search input
    let cityName = document.getElementById('search_input').value;
    let key = '06cc7efd0e5386068ec3c390bcfd0183';
    let lang = 'en';
    let units = 'metric';
    let url = "https://api.openweathermap.org/geo/1.0/direct?city=${cityName}&appid=${key}&units=${units}&lang=${lang}";

    fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      showWeather(data);
    })
}

function search () {
    document.getElementById("searchBtn").addEventListener("click", fetchWeather)
    

}


var currentForecast = document.getElementById('current_forecast')


//Forecast Cards

// search function (reset)