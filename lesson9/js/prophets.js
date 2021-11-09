const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
	.then(function(response) {
		return response.json();
	})
	.then(function(jsonObject) {
		const prophets = jsonObject['prophets'];

		prophets.forEach(prophet => {
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let birth = document.createElement('span');
			let place = document.createElement('span');
			let image = document.createElement('img');
			//use templet Literals
			h2.textContent = `${prophet.name} ${prophet.lastname}`;
			birth.textContent = `Date of Birth: ${prophet.birthdate}`;
			place.textContent = `Place of Birth: ${prophet.birthplace}`;
			image.src = prophet.imageurl;
			image.alt = `${prophet.name} ${prophet.lastname} - ${prophet.order}`;

			card.append(h2);
			card.append(birth);
			card.append(place);
			card.append(image);

			document.querySelector('div.cards').append(card);

		});
	});















