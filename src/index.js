import renderHome from './home';
import renderContact from './contact';
function createNav() {
  const nav = document.createElement('nav');
  const div = document.createElement('div');
  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';
  btnHome.addEventListener('click', function (event) {
    renderHome();
  });
  const btnContact = document.createElement('button');
  btnContact.textContent = 'Contact';
  btnContact.addEventListener('click', function (event) {
    renderContact();
  });
  div.appendChild(btnHome);
  div.appendChild(btnContact);
  nav.appendChild(div);
  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';
  return main;
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createNav());
  app.appendChild(createMain());
}

export default init;
