// adding json file from my new repository to get json data work
const events = 'https://nunthitafuno.github.io/json/events.json';
fetch(events)
.then(function (response) {
  return response.json();
})
.then(function (object) {
    let ev = object.events;

  for (let i = 0; i < ev.length; i++) {
      let e = ev[i];
    
      let eventOutput = `<div>
          <div class="e-name">${e.event} </div>
          <div class="date-time">${e.date} @ ${e.time}</div>
          <div class="location">${e.location}, ${e.address}</div>
      </div>`;
      document.querySelector('.event-list').insertAdjacentHTML('beforeend', eventOutput);
  }
});