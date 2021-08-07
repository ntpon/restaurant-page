import renderHome from './home';
import renderContact from './contact';
import renderMenu from './menu';
function createNav() {
  const nav = document.createElement('nav');
  const div = document.createElement('div');
  nav.className = 'navbar';
  const btnHome = document.createElement('button');
  btnHome.textContent = 'Thai Desserts';
  btnHome.className = 'brand';
  btnHome.addEventListener('click', function (event) {
    renderHome();
  });
  const btnContact = document.createElement('button');
  btnContact.textContent = 'Contact';
  btnContact.addEventListener('click', function (event) {
    renderContact();
  });

  const btnMenu = document.createElement('button');
  btnMenu.textContent = 'Menu';
  btnMenu.addEventListener('click', function (event) {
    renderMenu();
  });

  div.className = 'item';
  nav.appendChild(btnHome);
  div.appendChild(btnMenu);
  div.appendChild(btnContact);
  nav.appendChild(div);
  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  return footer;
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createNav());
  app.appendChild(createMain());
  app.appendChild(createFooter());
  renderHome();
}

export default init;
