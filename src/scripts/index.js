import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from '../DATA.json';

const restoElement = document.querySelector('catalouge-item');
restoElement.setAttribute("class", "restaurant");
data.restaurants.forEach(item => {
	// let description = item.description.splice(0, 20);
	const card = document.createElement("card");
	card.setAttribute("class", "card");
	card.innerHTML = `
	<div class="card-thumbnail">
		<img class="thumbnail" src="${item.pictureId}" alt="${item.name}">
	</div>
	<div class="card-description">
		<h4 class="card-optional">
			${item.city} • ${item.rating}
		</h4>
		<h3 class="card-title"> ${item.name} </h3>
		<p> ${item.description.substring(0, 150)} </p>
	</div>
	`;
	
	restoElement.appendChild(card);
})