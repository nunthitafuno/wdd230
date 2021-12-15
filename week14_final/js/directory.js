// adding souce json file from my new repository to get json data work
const events = 'https://nunthitafuno.github.io/json/directory.json';
fetch(events)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
      // store events array
      let trade = object.trade;

    // loop through the events
    for (let i = 0; i < trade.length; i++) {
        let t = trade[i];

        // create event output
        let eventOutput = `
            <div class="trade-data-card">
                <div class="img">
                    <img src="${t.logo}" alt="${t.name} logo"</img>
                </div>
                <div class="trade-info">
                    <div class="name">${t.name}</div>
                    <div>
                        <div class="address">${t.address}</div>
                        <div>Phnom Penh, KH  12101</div>
                    </div>
                    <div>
                        <div class="phone">${t.phone}</div>
                    </div>
                    <div>
                        <div class="email">${t.email}</div>
                        <div class="url">${t.url}</div>
                        <div class="button">
                            <a href="http://www.${t.url}/" target="_blank">
                                <div>Check it Out</div> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;

        // output event to the webpage
        document.querySelector('.card-output').insertAdjacentHTML('beforeend', eventOutput);
    }
    })
    .then(function() {

        const card = document.querySelector('#card');
        const list = document.querySelector('#list');
        const outputCard = document.querySelector('.card-output');
        const tradeData = document.querySelectorAll('.trade-data-card');
        
        list.addEventListener('click', () => {
            list.classList.toggle('active');
            card.classList.toggle('active');

            outputCard.classList.add('card-output-list');
        
            tradeData.forEach(function(e, i, tradeData) {
                tradeData[i].classList.add('trade-data-list');
            });
        });
        
        card.addEventListener('click', () => {
            list.classList.toggle('active');
            card.classList.toggle('active');

            outputCard.classList.remove('card-output-list');

            tradeData.forEach(function(e, i, tradeData) {
                tradeData[i].classList.remove('trade-data-list');
            });
        });
});