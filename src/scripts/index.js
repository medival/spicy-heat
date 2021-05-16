import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restoList from '../DATA';

console.log('Hello Coders! :)');
let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');
let restoElement = document.querySelector('resto');
restoElement.setAttribute('class', 'resto__list');
restoList.restaurants.forEach(resto => {
    const restoSelector = document.createElement('a');
    restoSelector.setAttribute('class', 'resto__selector');
    restoSelector.setAttribute('href', `/#/${resto.id}`);
    restoSelector.innerHTML = `
        <figure>
            <img src="${resto.pictureId}" alt="${resto.name}">
            <h4 class="resto__info"> ${resto.city} • ${resto.rating} </h4>
            <h4 class="resto__about"> About </h4>
            <h1 class="resto__title"> ${resto.name} </h1>
            <p class="resto__description"> ${resto.description.substring(0, 150)} </p>
        </figure>
	`;
	restoElement.appendChild(restoSelector);
});

navbarToggle.addEventListener('click',function(){
    if(this.classList.contains('active')){
			mainNav.style.display = "none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');
    }
});