let result;
let page = 1;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmY4NGI2M2NjOGVhMWMxZDE1YTRhNjU0NzVmMmE0YyIsInN1YiI6IjY1M2ZmMTM3NTA3MzNjMDBmZjRiNzYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.szjOC0tJo_5aYEAxLYxvvJHY8s7M-RhHR_2rMkJzNUY'
    }
  };

const getTrendingMovies = (trendingPage) => {  
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {renderTrendingMovies(response.results)})
        .catch(err => console.error(err));
}

const getAcclaimedMovies = () => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => renderAcclaimedMovies(response.results))
  .catch(err => console.error(err));
}

const renderTrendingMovies = (arrayMovies) => {

    arrayMovies.forEach(((movie)=>{
      const movieContainer = document.getElementsByClassName("grid-movies")[0]
      
      const cardMovie = document.createElement("div")
      const anchor = document.createElement("a")
      const imageMovie = document.createElement("img")
      const title = document.createElement("h4")
      
      cardMovie.classList.add("card-movie")
      anchor.href="./pages/detail.html"
      
      title.textContent=movie.title
      imageMovie.alt=movie.title
      imageMovie.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      
      anchor.appendChild(imageMovie);
      anchor.appendChild(title);
      cardMovie.appendChild(anchor);
      movieContainer.appendChild(cardMovie);
    }))
}

const renderAcclaimedMovies = (arrayMovies) => {
  
  arrayMovies.forEach((movie)=>{
    const moviesList = document.getElementsByClassName("acclaimed-movies")[0]
    const movieCard = document.createElement("div")
    movieCard.classList.add("card-movie")
    const anchor = document.createElement("a")
    const imageMovie = document.createElement("img")
   
    imageMovie.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    imageMovie.alt = movie.title
    anchor.href="./pages/detail.html"
    
    anchor.appendChild(imageMovie);
    movieCard.appendChild(anchor);
    moviesList.appendChild(movieCard);

  })
  
}


const more = document.querySelector(".more-page");

more.addEventListener("click", ()=> {
  page++
  getTrendingMovies(page);
})

document.addEventListener("DOMContentLoaded", () =>{
  getTrendingMovies(page);
  getAcclaimedMovies();
})