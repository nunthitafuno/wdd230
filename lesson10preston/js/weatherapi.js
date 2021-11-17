const currentRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=de43bb2636c246adb4440e4c6280bfee';
fetch(currentRequestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    let current = document.getElementById('d-current');
    current.textContent = jsObject.weather[0].description;
    let temp = jsObject.main.temp;
    let t = document.getElementById('d-temp');
    t.textContent = parseInt(temp);

    let humidity = jsObject.main.humidity;
    let h = document.getElementById('d-humid');
    h.textContent = humidity;

    let wind = jsObject.wind.speed;
    let w = document.getElementById('d-wind-s');
    w.textContent = wind;

    windChill();
});

function windChill() {
    
    let temp = parseInt(document.querySelector('#d-temp').textContent);
    let windSpeed = parseInt(document.querySelector('#d-wind-s').textContent)
    let windChill = '';
    if (temp > 50 || windSpeed < 3) {
        windChill = 'N/A ';
    } else {
        windChill = parseInt((35.74 + (0.6215 * temp)) -
        (35.75 * Math.pow(windSpeed, 0.16)) + 
        (0.4275 * temp * Math.pow(windSpeed, 0.16)));
    }
document.querySelector('#d-wind-c').textContent = windChill;
}
