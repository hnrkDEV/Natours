import '@babel/polyfill';
import { displayMap  } from './maplibre';
import { login } from './login';

const form = document.querySelector('.form');
if (!form) {
  console.error('Formulário não encontrado!');
  return;
}

const locations = JSON.parse(document.getElementById('map').dataset.locations);

displayMap(locations);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('formulário submetido');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password);
});