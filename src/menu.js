function createMenu() {
  const div = document.createElement('div');
  div.className = 'menu';
  const h1 = document.createElement('h1');
  h1.className = 'title';
  h1.textContent = 'List of Food';

  const foods = [
    {
      image: 'image1.jpg',
      title: 'Sweet Egg Floss Jelly',
      des: 'The name of the dessert comes from the observation that it has fine, long stripes and is shiny like silk.',
    },
    {
      image: 'image2.jpg',
      title: 'Bua loi',
      des: 'It consists of rice flour rolled into small balls, and cooked in coconut milk and sugar.',
    },
    {
      image: 'image3.jpg',
      title: 'Thong yot',
      des: 'It is an ancient Thai dessert and one of the nine auspicious traditional Thai desserts. Thong Yot originated in Aveiro District, Portugal.',
    },
    {
      image: 'image4.jpg',
      title: 'Khao tom mat',
      des: 'It is a Southeast Asian dessert eaten by Laotian and Thai people, consisting of seasoned steamed sticky rice wrapped in banana leaves.',
    },
  ];
  const divFoods = document.createElement('div');
  divFoods.className = 'food-list';

  foods.forEach((item) => {
    const { image, title, des } = item;
    divFoods.innerHTML += div.innerHTML + createCard(image, title, des);
  });
  div.appendChild(h1);
  div.appendChild(divFoods);
  return div;
}
function createCard(image, title, des) {
  const template = `
    <div class="card">
        <img src="./images/${image}" class="card-img" alt="${title}"/>
        <div class="card-title">${title}</div>
        <div class="card-des">${des}</div>
    </div>
  `;
  return template;
}
function renderMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default renderMenu;
