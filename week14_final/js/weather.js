const apiKey = '11c5855a24cf892c6f4d0553a559f864';
const latLon = 'lat=11.585230&lon=104.866200';
const ex = 'exclude=hourly,minutely';
const requestURL = `https://api.openweathermap.org/data/2.5/onecall?${latLon}&${ex}&units=imperial&appid=${apiKey}`;


// adding a fake alert section because I can't find any actual alerts come through to test with
const alerts = [
    {
      "sender_name": "Think Hazard",
      "event": "Heat Advisory",
      "start": "12/25/2021",
      "end": "12/27/2021",
      "description": "Heat index  is expected to be greater than 105 degrees in Phnom Penh, KH area."
    }
];
fetch(requestURL)
    .then((response) => response.json())
    .then((object) => {
        
        let current = object.current;
        let daily = object.daily;
    
        let alert = alerts;

        
        if (alert != undefined) {
            let start = new Date(alert[0].start).toDateString();
            let end = new Date(alert[0].end).toDateString();

            let weatherAlert = document.querySelector('.weather-alert');
    
            let alertOutput = 
                `<h3>${alert[0].event} in effect: ${start} - ${end}</h3>
                <p>
                    ${alert[0].description}
                    <span id="close-weather-banner">CLOSE</span>
                </p>`;
            
            weatherAlert.insertAdjacentHTML('beforeend', alertOutput);
            
            let bClose = document.querySelector('#close-weather-banner');
            bClose.addEventListener('click', function() {
                weatherAlert.classList.add('hidden');
            });
        }

        
        let currentOutput = 
            `<div class="temp-icon">
                <div class="t">
                    <div class="temp">${parseInt(current.temp)}&#176;</div>
                    <div class="humidity">RH: ${current.humidity}%</div>
                </div>
                <div class="icon-condition">
                    <img src='http://openweathermap.org/img/w/${current.weather[0].icon}.png' alt='weather icon'>
                    <div class="w-icon">${current.weather[0].description}</div>
                </div>
            </div>`;
        
        
        document.querySelector('.current-weather').innerHTML = currentOutput;

        
        let sevenDay = [];
        
        for(let i = 0; i < daily.length; i++) {
            
            let w = {
                wIcon: daily[i].weather[0].icon,
                wDesc: daily[i].weather[0].description,
                wTemp: parseInt(daily[i].temp.day),
                wHumi: daily[i].humidity,
                wDate: daily[i].dt
            };
            
            sevenDay.push(w);
        }

        
        let numDays = 3;
        
        for(let i = 1; i <= numDays; i++) {
            
            let o_icon = `https://openweathermap.org/img/w/${sevenDay[i].wIcon}.png`;
            let o_desc = sevenDay[i].wDesc;
            let o_temp = sevenDay[i].wTemp;
            let o_humi = sevenDay[i].wHumi;
            let o_date = sevenDay[i].wDate;
        
            let dayOutput = document.querySelector('#day-output');
            let weatherOutput = document.querySelector('#weather-output');

            
            let dayTh = document.createElement('th');

            
            let weatherInfo = 
                `<td class="forecast-info">
                    <img src="${o_icon}" alt="${o_desc}" class="w-icon">
                    <div>
                        <div class="f-i-temp">${o_temp} &#176;F</div>
                        <div>RH: ${o_humi}%</div>
                        <div>${o_desc}</div>
                    </div>
                </td>`;

            
            dayTh.textContent = calcDayOfWeek(o_date);
            
            dayOutput.appendChild(dayTh);
            weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
        }
        
});


function calcDayOfWeek(date) {
    
    let d = new Date(0);
    d.setUTCSeconds(date);

    let dayOfWeek = d.toLocaleString('en-us', {weekday: 'long'});
    return dayOfWeek;
}