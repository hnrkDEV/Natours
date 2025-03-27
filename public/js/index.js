import '@babel/polyfill';
import { displayMap  } from './maplibre';
import { login } from './login';

// DOM ELEMENTS

const mapBox = document.getElementById('map');

// DELEGATION

if(mapBox) {
    const locations = JSON.parse(document.getElementById('map').dataset.locations);
    displayMap(locations);
}

const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('formulário submetido');
      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        login(email, password);
      });
}

