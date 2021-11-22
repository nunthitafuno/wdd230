const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=de43bb2636c246adb4440e4c6280bfee&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wSpeed').textContent = jsObject.wind.speed;
    
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    let w = "N/A";
    if (t <= 50 && s > 3) {
        w = wChill(t, s) + '°F';
    }

    document.getElementById("wChill").innerHTML = w;
    function wChill(t, s) {
        wind = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));
        return wind.toFixed(0)
        
    }

});
