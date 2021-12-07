const events = 'https://nunthitafuno.github.io/json/events.json';
  
fetch(events)
.then(function (response) {
  return response.json();
})
.then(function (object) {
    // store events array
    let ev = object.events;

  // loop through the events
  for (let i = 0; i < ev.length; i++) {
      let e = ev[i];
      // create event output
      let eventOutput = `<div>
          <div class="e-name">${e.event} </div>
          <div class="date-time">${e.date} @ ${e.time}</div>
          <div class="location">${e.location}, ${e.address}</div>
      </div>`;
      // output event to the webpage
      document.querySelector('.event-list').insertAdjacentHTML('beforeend', eventOutput);
  }
});