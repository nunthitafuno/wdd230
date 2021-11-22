const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    const preston = document.querySelector('.datatownPreston');
    const prestonfilter = towns.filter(x => x.name == "Preston");
    prestonfilter.forEach(townpreston => {
        let eachtown = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.innerHTML = townpreston.name;
        p.innerHTML = `<i>${townpreston.motto}</i> <br> </p><p>Year Founded: ${townpreston.yearFounded} <br> Population: ${townpreston.currentPopulation} <br> Annual Rain Fall: ${townpreston.averageRainfall}`;
        eachtown.appendChild(h3);
        eachtown.appendChild(p);
        preston.appendChild(eachtown);
        });

        const fishhaven = document.querySelector('.datatownFishhaven');
        const fishhavenfilter = towns.filter(x => x.name == "Fish Haven");
        fishhavenfilter.forEach(townfish => {
            let eachtown = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            
            h3.innerHTML = townfish.name;
            p.innerHTML = `<i>${townfish.motto}</i> <br> </p><p>Year Founded: ${townfish.yearFounded} <br> Population: ${townfish.currentPopulation} <br> Annual Rain Fall: ${townfish.averageRainfall}`;
            eachtown.appendChild(h3);
            eachtown.appendChild(p);
            fishhaven.appendChild(eachtown);
        });


    
        const sodasprings = document.querySelector('.datatownSodaSprings');
        const sodafilter = towns.filter(x => x.name == "Soda Springs");
        sodafilter.forEach(townsoda => {
            let eachtown = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
      
            h3.innerHTML = townsoda.name;
            p.innerHTML = `<i>${townsoda.motto}</i> <br> </p><p>Year Founded: ${townsoda.yearFounded} <br> Population: ${townsoda.currentPopulation} <br> Annual Rain Fall: ${townsoda.averageRainfall}`;
            eachtown.appendChild(h3);
            eachtown.appendChild(p);
            sodasprings.appendChild(eachtown);
        });

  });