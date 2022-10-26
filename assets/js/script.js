var otherCities = document.getElementById("cities")
var weatherDisplay = document.getElementById("weather_display")
var forecastCards = document.querySelectorAll("#forecast_card")
var searchBtn = document.querySelector("#searchBtn")
var apiKey = '959168e8af0d2f45700600a0d8d06e7f';
var city = "dallas"

//Search by city.



searchBtn.addEventListener('click', getApi)


function getApi() {
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=dallas&appid=959168e8af0d2f45700600a0d8d06e7f';
    fetch(requestUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                console.log(data.list)
            })
        }
    })
}


//Displaying Current Forecast

var currentForecast = document.getElementById('current_forecast')


//Forecast Cards

// search function (reset)