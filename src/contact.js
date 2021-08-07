function createContact() {
  const div = document.createElement('div');
  const addressDiv = document.createElement('div');
  div.className = 'contact';
  addressDiv.className = 'address';
  const h1 = document.createElement('h1');
  h1.className = 'title';
  h1.textContent = 'Contact';

  addressDiv.innerHTML = createMap();
  div.appendChild(h1);
  div.appendChild(addressDiv);
  return div;
}

function createMap() {
  const map = `<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124024.51857625476!2d100.45208295820318!3d13.732599700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b2e56bb115%3A0x81cbf46290d5e89b!2sYummy%20Thai%20Food!5e0!3m2!1sth!2sth!4v1628323689653!5m2!1sth!2sth"
  width="100%"
  height="600"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>`;
  return map;
}
function renderContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default renderContact;
