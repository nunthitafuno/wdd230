const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const prestonfilter = towns.filter(x => x.name == "Preston");
    let eventsPreston = prestonfilter[0].events;
    let ul = document.createElement('ul'); 

    eventsPreston.forEach(eventlist => {
    let list = document.createElement('li');
    list.innerHTML = eventlist;
    ul.appendChild(list);
  }); 

  document.getElementById("prestonEvents").appendChild(ul);
});