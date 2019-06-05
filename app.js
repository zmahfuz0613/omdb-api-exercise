const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = '3409db1b';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

let movies = [];
const moviesList = document.querySelector('.movie-list');

const render = () => {
  moviesList.innerHTML = '';
  movies.forEach((movie) => {
    const el = document.createElement('div');
    el.innerHTML = `
    <h3>Movie Title: ${movie.Title}</h3>
    <h4>Year: ${movie.Year}</h4>
    <img src=${movie.Poster} />
    `;

    moviesList.append(el);

  })
}
const fetchMovies = async () => {
  const resp = await axios(`${BASE_URL}s=star&page=2`);
  movies = resp.data.Search;
  render();
}

fetchMovies();

