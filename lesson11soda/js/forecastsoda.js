const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=de43bb2636c246adb4440e4c6280bfee';
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let list = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    
    for (let day = 0; day <= 4; day ++) {
        let date = new Date(list[day].dt_txt);
        document.getElementById(`dayWeek${day+1}`).textContent = dayOfWeek[date.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = list[day].main.temp;

        const imgAlt = list[day].weather[0].description;
        const imageSrc = 'https://openweathermap.org/img/wn/' + list[day].weather[0].icon + '@2x.png';
        document.getElementById(`icon${day+1}`).setAttribute('src', imageSrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', imgAlt);
    }

});