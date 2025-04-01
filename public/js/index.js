import '@babel/polyfill';
import { displayMap  } from './maplibre';
import { login , logout } from './login';
import { updateSettings } from './updateSettings';


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
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);
        
        const type = 'User'

        updateSettings(form, type);
      });
};

const userPasswordForm = document.querySelector('.form-user-settings')

if (userPasswordForm) {
    userPasswordForm.addEventListener('submit',async e => {
        e.preventDefault();
        console.log('formulário submetido');

        document.querySelector('.btn--save-password').textContent = 'Updating...'

        const data = {
            passwordCurrent: document.getElementById('password-current').value,
            password: document.getElementById('password').value,
            passwordConfirm: document.getElementById('password-confirm').value
        }
        const type = 'Password'
        await updateSettings(data, type);

        document.querySelector('.btn--save-password').textContent = 'Save Password'
        document.getElementById('password-current').value = ''
        document.getElementById('password').value = ''
        document.getElementById('password-confirm').value = ''
      });
};