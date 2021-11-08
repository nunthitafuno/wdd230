const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
 .then(function (jsonObject) {
     const prophets = jsonObject['prophets'];
    
    
     for (let i = 0; i < prophets.length; i++ ) {
     
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('span');
        let place = document.createElement('span');
        let image = document.createElement('img');
          //use templet Literals
        h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
        birth.textContent = `Date of Birth: ${prophets[i].birthdate}`;
        place.textContent = `Place of Birth: ${prophets[i].birthplace}`;
        image.src = prophets[i].imageurl;
        image.alt = `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`;

        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(image);
       
        document.querySelector('div.cards').appendChild(card);
     }
 });









