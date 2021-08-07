function createHome() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact';
  return h1;
}

function renderHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default renderHome;
