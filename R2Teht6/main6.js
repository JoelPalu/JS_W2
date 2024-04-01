const movies = [];
const amount = parseInt(prompt('How many movies you want to add?'));

for (let i = 0; i < amount; i++) {
  const movieName = prompt('Enter movie name: ');
  const rating = parseFloat(prompt('Enter rating: '));
  addMovie(movieName, rating);
}

listMovies();
console.log(movies);
movies.sort((a, b) => b.rating - a.rating);
console.log(movies);
addHTML(movies);


function addMovie(movieName, rating) {
  const movie = {name: movieName, rating: rating};
  movies.push(movie);
}

function listMovies() {
  for (const movie of movies) {
    console.log(`Name: ${movie.name}, Rating: ${movie.rating}`);
  }
}

function addHTML(array) {
  const html = document.querySelector('#result');
  html.insertAdjacentHTML('beforeend', '<tr>' +
    '<td>Name</td>' +
    '<td>Rating</td>' +
    '</tr>');
  for (const movie of array) {
    html.insertAdjacentHTML('beforeend', '<tr>' +
      `<td>${movie.name}</td>` +
      `<td>${movie.rating}</td>` +
      '</tr>');
  }
}
