const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = '3a49112b'


const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a49112b'


const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#input');
const resultsElement = document.querySelector('#Results');


buttonElement.onclick = function(e){
  e.preventDefault;
  searchMovies(inputElement.value);
  return false;
}

inputElement.addEventListener('keypress', function (e) {
  e.preventDefault;
  if (e.key === 'Enter') {   
    searchMovies(inputElement.value);    
  }
  return false;
});

function searchMovies(movieName){
  const getMovies = async () => {
  
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=3a49112b`
    
    try {
      
      const result = await axios(url);
      if(result.data.Response != "False"){
        renderMovies(result.data.Search);   
      } else{
        resultsElement.innerHTML = 'Ingrese más caracteres de búsqueda';
      }  
    
    } catch (error) {
      console.log(`Error: ${error}`)
    }    
    
    }

    getMovies();
}

function renderMovies(data) {  
  if(data.length>0){
    resultsElement.innerHTML = createCategory(data, 'Results...');
  }else{
    resultsElement.innerHTML = '';
  }


}


function createCategory(movies, title) {

  let categoryHtml =  `<div>
        <ul class="flex-container">
          <li class="flex-title-item">${title}</li>
        </ul>
        <ul class="flex-container">`;

  categoryHtml += createMovies(movies);
  categoryHtml += `</ul></div>`;

  return categoryHtml;
}


function createMovies(movies){
  
  let moviesHtml = '';
  if(movies != null){
      movies.map((movie) => {
      if (movie.Poster != 'N/A') {
        moviesHtml +=  `<li class="flex-item">
                            <img src="${movie.Poster}" data-movie-id="${movie.imdbID}"/>
                            <span>${movie.Title} (${movie.Year})</span>
                      </li>`;
      }
  
    });
  }

  return moviesHtml;
}

