const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const fishfilter = towns.filter(x => x.name == "Fish Haven");
    let eventsFish = fishfilter[0].events;
    let ul = document.createElement('ul'); 

    eventsFish.forEach(event => {
    let list = document.createElement('li');
    list.innerHTML = event;
    ul.appendChild(list);
  }); 

  document.getElementById("fishEvent").appendChild(ul);
});