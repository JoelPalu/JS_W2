async function getRestaurants() {
  const response = await fetch('https://10.120.32.94/restaurant/api/v1/restaurants');
  const data = await response.json();
  const restaurants = data;
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  const list = document.getElementById('list');
  const dialog = document.getElementById('dialog');

  restaurants.forEach((restaurant) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${restaurant.name}</td><td>${restaurant.address}</td>`;
    tr.addEventListener('click', () => {
      getMenu(restaurant, restaurant._id, 'en', tr);
    });
    list.appendChild(tr);
  });
}

getRestaurants();


async function getMenu(restaurant, restId, lang, tr) {
  const trs = document.querySelectorAll('tr');
  trs.forEach((tr) => {
    tr.classList.remove('highlight');
  });
  tr.classList.add('highlight');
  dialog.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}</p>
      <p>${restaurant.postalCode} ${restaurant.city}</p>
      <p>${restaurant.phone}</p>
      <p>${restaurant.company}</p>
      <button id="close">Close</button>
    `;

  try {
    const response = await fetch(`https://10.120.32.94/restaurant/api/v1/restaurants/daily/${restId}/${lang}`);

    if (!response.ok) {
      throw new Error('There was an error to load daily menu');
    }
    const data = await response.json();
    const menu = data['courses'];


    const menuUI = document.createElement('table');
    menu.forEach((menuItem) => {
      menuUI.innerHTML += `<tr><td>${menuItem.name}</td><td>${menuItem.price}</td><td>${menuItem.diets}</td></tr>`;
    });
    dialog.appendChild(menuUI);
    dialog.showModal();
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
      dialog.close();
    });
  } catch (error) {
    console.error(error);
    dialog.innerHTML += `<p>${error}</p>`;
    dialog.showModal();
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
      dialog.close();
    });
  }
}


