import '@babel/polyfill';
import { displayMap  } from './maplibre';
import { login , logout } from './login';
import { updateData } from './updateSettings';


// DOM ELEMENTS

const mapBox = document.getElementById('map');

// DELEGATION

if(mapBox) {
    const locations = JSON.parse(document.getElementById('map').dataset.locations);
    displayMap(locations);
}

const loginForm = document.querySelector('.form--login');

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('formulário submetido');
      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        login(email, password);
      });
};

const logoutBtn = document.querySelector('.nav__el--logout');

if(logoutBtn) {
    logoutBtn.addEventListener('click', logout);
} 


const accountForm = document.querySelector('.form-user-data');


if (accountForm) {
    accountForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('formulário submetido');
      
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
      
        updateData(name, email);
      });
};