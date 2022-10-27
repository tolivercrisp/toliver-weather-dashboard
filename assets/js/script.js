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
function getApi(city) {
    var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=dallas&appid=87f9ba21f1aa6515467d3fc1f7b523fc"
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                console.log(data.list)
            })
        }
    })
}
getApi()

searchBtn.addEventListener('click', getApi)


//displays the weather
function displayWeather (data) {




}


var currentForecast = document.getElementById('current_forecast')


//Forecast Cards

// search function (reset)