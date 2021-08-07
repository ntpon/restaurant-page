import renderMenu from './menu';

function createHome() {
  const div = document.createElement('div');
  div.className = 'home';
  const header = document.createElement('header');
  const button = document.createElement('button');
  button.className = 'btn btn-discover';
  button.textContent = 'Order!';
  header.className = 'hero';
  button.addEventListener('click', () => {
    renderMenu();
  });
  const h1 = document.createElement('h1');
  h1.textContent = 'Thai Style Festival';

  header.appendChild(h1);
  const divButton = document.createElement('div');
  divButton.className = 'div-discover';
  divButton.appendChild(button);
  div.appendChild(header);
  div.appendChild(divButton);

  return div;
}

function renderHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default renderHome;
