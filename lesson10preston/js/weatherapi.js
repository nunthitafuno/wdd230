const currentRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=de43bb2636c246adb4440e4c6280bfee';
fetch(currentRequestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    let current = document.getElementById('current');
    current.textContent = jsObject.weather[0].description;+'</span>&deg;F'
    let temperature = jsObject.main.temp;
    let temp = document.getElementById('temp');
    temp.textContent = parseInt(temperature);

    let humidity = jsObject.main.humidity;
    let humid = document.getElementById('humid');
    humid.textContent = humidity;

    let wind = jsObject.wind.speed;
    let chill = document.getElementById('wind-speed');
    chill.textContent = wind;

     windChillcalculate()
    
});

function windChillcalculate() {
    
    let temperature = parseInt(document.querySelector('#temp').textContent);
    let windSpeed = parseInt(document.querySelector('#wind-speed').textContent)
    let windChill = '';
    if (temperature > 50 || windSpeed < 3) {
        windChill = 'N/A ';
    } else {
        windChill = parseInt((35.74 + (0.6215 * tempF)) -
        (35.75 * Math.pow(windSpeed, 0.16)) + 
        (0.4275 * tempF * Math.pow(windSpeed, 0.16)));
    }
document.querySelector('#wind-chill').textContent = windChill;
}

