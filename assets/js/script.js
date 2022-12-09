// Create unit tests for the following functions:

// global api key
var api_key = '1010ae095ef26a48fc294141617d504c';

// DOM element variables
// --- Search Bar
var searchBtn = document.getElementById("searchBtn")
// --- Current Weather
var nowTime = document.getElementById("current_time")
var nowIconImage = document.getElementById("current_icon");
var nowTemp = document.getElementById("current_temp");
var nowFeelsLike = document.getElementById("current_feels_like")
var nowWind = document.getElementById("current_wind");
var nowHumid = document.getElementById("current_humidity");
// --- One Day
var oneTime = document.getElementById("one_time")
var oneIconImage = document.getElementById(("one_icon"))
var oneDate = document.getElementById("one_date");
var oneTemp = document.getElementById("one_temp");
var oneWind = document.getElementById("one_wind");
var oneHumid = document.getElementById("one_humid");
// --- Two Days
var twoTime = document.getElementById("two_time")
var twoIconImage = document.getElementById(("two_icon"))
var twoDate = document.getElementById("two_date");
var twoTemp = document.getElementById("two_temp");
var twoWind = document.getElementById("two_wind");
var twoHumid = document.getElementById("two_humid");
// --- Three days
var threeTime = document.getElementById("three_time")
var threeIconImage = document.getElementById(("three_icon"))
var threeDate = document.getElementById("three_date");
var threeTemp = document.getElementById("three_temp");
var threeWind = document.getElementById("three_wind");
var threeHumid = document.getElementById("three_humid");
// --- Four Days
var fourTime = document.getElementById("four_time")
var fourIconImage = document.getElementById(("four_icon"))
var fourDate = document.getElementById("four_date");
var fourTemp = document.getElementById("four_temp");
var fourWind = document.getElementById("four_wind");
var fourHumid = document.getElementById("four_humid");
// --- Five Days
var fiveTime = document.getElementById("five_time")
var fiveIconImage = document.getElementById(("five_icon"))
var fiveDate = document.getElementById("five_date");
var fiveTemp = document.getElementById("five_temp");
var fiveWind = document.getElementById("five_wind");
var fiveHumid = document.getElementById("five_humid");

// search if the search button is clicked
document.getElementById("searchBtn").addEventListener("click", function(event) {
  event.preventDefault()
  displayWeather()
})

// hides DOM containers on page load (last bit centers the search bar)
var todayContainer = document.getElementById("today_container").style.display = "none";
var forecastContainer = document.getElementById("forecast_container").style.display = "none";



// big ol function that handles everything regarding weather
function displayWeather () {
  var cityName = document.getElementById("search_input").value
  document.getElementById("city").innerHTML = cityName.toLowerCase()
  .split(' ')
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(' ');

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
          console.log(data)

          // (3) current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=${api_key}`)
        .then(function (response) {
            return response.json()
          }) .then(function (data) {
          console.log(data)

          // displays containers when searched
          var todayContainer = document.getElementById("today_container").style.display = "block";
          var forecastContainer = document.getElementById("forecast_container").style.display = "block";
          
          
          
          nowTime.innerHTML = moment(data.main.dt).format("dddd");
          // grabs the first two numbers of temp
          let rawTemp = data.main.temp
          nowTemp.innerHTML =  rawTemp.toString().slice(0, 2) + "°";
          var nowIcon = data.weather[0].icon;
          nowIconImage.src = "https://openweathermap.org/img/wn/" + nowIcon + "@" + ".png";
          nowFeelsLike.innerHTML = data.main.feels_like;
          nowWind.innerHTML = data.wind.speed + " " + "mph";
          nowHumid.innerHTML =  data.main.humidity + "%";

        }) 
        

            
               // initializes array in a variable (was reading undefined)
            oneTime.innerHTML = moment(data.list[0].dt).format("dddd");
            var oneIcon = data.list[0].weather.icon;
            oneIconImage.src = "https://openweathermap.org/img/wn/" + oneIcon + ".png";
            oneTemp.innerHTML = "Temp: " + data.list[0].main.temp + "°";
            oneWind.innerHTML = "Wind: " + data.list[0].wind.speed + " " + "mph";
            oneHumid.innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
            
            twoTime.innerHTML = moment(data.list[8].dt).format("dddd");
            var twoIcon = data.list[8].weather.icon;
            twoIconImage.src = "https://openweathermap.org/img/wn/" + twoIcon + ".png"; 
            twoTemp.innerHTML = "Temp: " + data.list[1].main.temp + "°";
            twoWind.innerHTML = "Wind: " + data.list[1].wind.speed + " " + "mph";
            twoHumid.innerHTML = "Humidity: " + data.list[1].main.humidity + "%";

            threeTime.innerHTML = moment(data.list[16].dt).format("dddd");
            var threeIcon = data.list[16].weather.icon;
            threeIconImage.src = "https://openweathermap.org/img/wn/" + threeIcon + ".png";
            threeTemp.innerHTML = "Temp: " + data.list[2].main.temp + "°";
            threeWind.innerHTML = "Wind: " + data.list[2].wind.speed + " " + "mph";
            threeHumid.innerHTML = "Humidity: " + data.list[2].main.humidity + "%";

            fourTime.innerHTML = moment(data.list[24].dt).format("dddd");
            var fourIcon = data.list[24].weather.icon;
            fourIconImage.src = "https://openweathermap.org/img/wn/" + fourIcon + ".png";
            fourTemp.innerHTML = "Temp: " + data.list[3].main.temp + "°";
            fourWind.innerHTML = "Wind: " + data.list[3].wind.speed + " " + "mph";
            fourHumid.innerHTML = "Humidity: " + data.list[3].main.humidity + "%";

            fiveTime.innerHTML = moment(data.list[32].dt).format("dddd");
            var fiveIcon = data.list[32].weather.icon;
            fiveIconImage.src = "https://openweathermap.org/img/wn/" + fiveIcon + ".png";
            fiveTemp.innerHTML  = "Temp: " + data.list[4].main.temp + "°";
            fiveWind.innerHTML  = "Wind: " + data.list[4].wind.speed + " " + "mph";
            fiveHumid.innerHTML  = "Humidity: " + data.list[4].main.humidity + "%";
                                                       
        })  
      })        
    }
  
