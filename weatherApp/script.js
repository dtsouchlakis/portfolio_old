const mainDiv = document.querySelector(".mainweather");
const secondDiv = document.querySelector(".secondaryweather");
const resultsDiv = document.querySelector(".results");
const unitTemp = "°";
const unitWind = "m/s";
const unitPressure = "hPa";
const unitHumidity = "%";
const unitCloudiness = "%";
const img = document.querySelectorAll("img");
const inputTxt = document.querySelector("input");
const mouseoverEvent = new Event("mouseover");
const clickEvent = new Event("click");
const keyPresses = {
  ArrowDown: false,
  ArrowUp: false,
  selectedDiv: {},
};
inputTxt.addEventListener("keyup", function (e) {
  console.log(e.key);
  var myCity = e.currentTarget.value;
  if (e.key == "Enter") {
    // console.log(e.currentTarget.value)
    getWeatherData(myCity);
    keyPresses.ArrowDown = false;
    keyPresses.ArrowUp = false;
    keyPresses.selectedDiv = {};
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = "none";
  } else if (e.key != "ArrowUp" && e.key != "ArrowDown") {
    keyPresses.ArrowDown = false;
    keyPresses.ArrowUp = false;
    keyPresses.selectedDiv = {};

    autocomplete(myCity);
  }
});
document.body.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
  resultsDiv.style.display = "none";
  keyPresses.ArrowDown = false;
  keyPresses.ArrowUp = false;
  keyPresses.selectedDiv = {};
});
//this function changes the background depending on the time of the day
function timeOfTheDay(time) {
  var today = new Date();
  if (!time) {
    var time = today.getHours();
  }
  console.log(time);
  if (time >= 6 && time <= 12) {
    document.body.style.backgroundImage = "url(./pexels-lukas-296234.jpg)";
  } else if (time > 12 && time < 18) {
    document.body.style.backgroundImage = "url(./mvehfqz6w2ges2dj.jpg)";
  } else if (time >= 18 && time < 6) {
    document.body.style.backgroundImage = "url(./background.jpg)";
  }
}
function setInput(str) {
  keyPresses.ArrowDown = false;
  keyPresses.ArrowUp = false;
  keyPresses.selectedDiv = {};
  str = str.split(" ")[0];
  inputTxt.value = str;
  getWeatherData(str);
  resultsDiv.style.display = "none";
}
// This function gets the name name from the inputed datetime string
function getDayName(dateStr, locale = "en-US") {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getWeatherData(city) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d1e1713a4ca7bc001d7edac58961f82a&units=metric`
  );
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      //This part of the code deals with the current day weather,
      //so the hard coded zero selects the first element from the get response
      let result = JSON.parse(xhr.responseText).list;
      console.log(JSON.parse(xhr.responseText));
      let ico = result[0].weather[0].icon;
      let time = result[0].dt_txt;
      let icoUrl = `http://openweathermap.org/img/wn/${ico}@2x.png`;
      let temp = Math.floor(result[0].main.temp);
      let clouds = result[0].weather[0].description;
      let wind = result[0].wind.speed;
      let humidity = result[0].main.humidity;
      let pressure = result[0].main.pressure;
      let cloudiness = result[0].clouds.all;
      let day = getDayName(time);
      //create elements for each weather info//
      let cityElem = document.querySelector(".location");
      let dayElem = document.querySelector(".day");
      let icoElem = document.querySelector(".icon");
      let temperatureElem = document.querySelector(".temperature");
      let cloudsElement = document.querySelector(".description");
      let windElem = document.querySelector(".wind");
      let pressureElem = document.querySelector(".pressure");
      let humidityElem = document.querySelector(".humidity");
      let cloudinessElem = document.querySelector(".cloudiness");
      cityElem.textContent = city;
      dayElem.textContent = day;
      icoElem.setAttribute("src", icoUrl);
      icoElem.style.visibility = "visible";
      temperatureElem.textContent = temp + unitTemp;
      cloudsElement.textContent = clouds;
      windElem.textContent = "wind: " + wind + unitWind;
      pressureElem.textContent = "pressure: " + pressure + unitPressure;
      humidityElem.textContent = "humidity: " + humidity + unitHumidity;
      cloudinessElem.textContent = "cloudiness: " + cloudiness + unitCloudiness;
      var counter = 1;
      //The api returns results for every 3 hours so we divide by 8 to get daily data
      for (let i = 8; i <= 32; i += 8) {
        let ico = result[i].weather[0].icon;
        let time = result[i].dt_txt;
        let icoUrl = `http://openweathermap.org/img/wn/${ico}@2x.png`;
        let temp = Math.floor(result[i].main.temp);
        let clouds = result[i].weather[0].description;
        let day = getDayName(time);
        //create elements for each weather info//
        const selector = `.secondaryweather div:nth-child(${counter})`;
        let dayElem = document.querySelector(`${selector} .day`);
        let icoElem = document.querySelector(`${selector} .icon`);
        let temperatureElem = document.querySelector(
          `${selector} .temperature`
        );
        let cloudsElement = document.querySelector(`${selector} .description`);
        cityElem.textContent = city;
        dayElem.textContent = day;
        icoElem.setAttribute("src", icoUrl);
        icoElem.style.visibility = "visible";
        temperatureElem.textContent = temp + unitTemp;
        cloudsElement.textContent = clouds;
        counter++;
      }
    }
  });
  xhr.send(null);
  //this part of the code changes the size on load to give the transition effect
  mainDiv.style.width = "80%";
  //deals with the issue of the images looking broken before being set by the code

  setTimeout(() => {
    for (let item of img) {
      item.style.display = "block";
    }
  }, 400);
  secondDiv.style.width = "80%";
}
timeOfTheDay();

function autocomplete(city) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=d1e1713a4ca7bc001d7edac58961f82a`
  );
  xhr.addEventListener("readystatechange", function () {
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = "none";

    if (xhr.readyState == XMLHttpRequest.DONE) {
      let cities = JSON.parse(xhr.responseText);
      for (let index = 0; index < cities.length; index++) {
        const element = cities[index];
        console.log(element.name);
        let newDiv = document.createElement("div");
        newDiv.textContent = `${element.name} - ${element.country}`;
        newDiv.setAttribute("onclick", "setInput(this.innerText)");
        newDiv.classList.add("resultAdd");
        resultsDiv.appendChild(newDiv);
        resultsDiv.style.display = "block";
      }
      // console.log(JSON.parse(xhr.responseText));
    }
  });
  xhr.send(null);
}
getWeatherData("Seoul");
inputTxt.addEventListener("keyup", (e) => {
  console.log(inputTxt.value);
  switch (e.key) {
    case "ArrowDown":
      if (keyPresses.ArrowDown == true) {
        if (keyPresses.selectedDiv.nextElementSibling) {
          keyPresses.selectedDiv.classList.remove("hover");
          console.log(keyPresses.selectedDiv);
          keyPresses.selectedDiv.nextElementSibling.classList.add("hover");
          keyPresses.selectedDiv = keyPresses.selectedDiv.nextElementSibling;
        }
      } else if (keyPresses.ArrowUp == true) {
        keyPresses.selectedDiv.classList.remove("hover");
        keyPresses.selectedDiv.nextElementSibling.classList.add("hover");
        keyPresses.selectedDiv = keyPresses.selectedDiv.nextElementSibling;
      } else {
        keyPresses.selectedDiv = resultsDiv.firstElementChild;
        keyPresses.selectedDiv.classList.add("hover");
        keyPresses.ArrowDown = true;
      }
      break;
    case "ArrowUp":
      if (keyPresses.ArrowUp == true) {
        if (keyPresses.selectedDiv.previousElementSibling) {
          keyPresses.selectedDiv.classList.remove("hover");
          console.log(keyPresses.selectedDiv);
          keyPresses.selectedDiv.previousElementSibling.classList.add("hover");
          keyPresses.selectedDiv =
            keyPresses.selectedDiv.previousElementSibling;
        }
      } else if (keyPresses.ArrowDown == true) {
        keyPresses.selectedDiv.classList.remove("hover");
        keyPresses.selectedDiv.previousElementSibling.classList.add("hover");
        keyPresses.selectedDiv = keyPresses.selectedDiv.previousElementSibling;
      } else {
        keyPresses.selectedDiv = resultsDiv.lastElementChild;
        keyPresses.selectedDiv.classList.add("hover");
        keyPresses.ArrowUp = true;
      }
      break;
    case "Enter":
      setInput(keyPresses.selectedDiv.textContent);
    default:
      break;
  }
});
