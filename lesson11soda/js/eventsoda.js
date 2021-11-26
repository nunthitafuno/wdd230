
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const sodafilter = towns.filter(x => x.name == "Soda Springs");
    let sodaEvent = sodafilter[0].events;
    let ul = document.createElement('ul'); 

    sodaEvent.forEach(eventlist => {
    let list = document.createElement('li');
    list.innerHTML = eventlist;
    ul.appendChild(list);
  }); 

  document.getElementById("sodaEvent").appendChild(ul);
});