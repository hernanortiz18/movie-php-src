const deleteOptions =  {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify()}
   
const putOptions =  (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}}

const apiMovies = {
  
    getAcclaimedMovies : () => {
      return fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, {method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmY4NGI2M2NjOGVhMWMxZDE1YTRhNjU0NzVmMmE0YyIsInN1YiI6IjY1M2ZmMTM3NTA3MzNjMDBmZjRiNzYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.szjOC0tJo_5aYEAxLYxvvJHY8s7M-RhHR_2rMkJzNUY'
        }})
      .then(response => response.json())
      .then(response => apiMovies.renderAcclaimedMovies(response.results))
      .catch(err => console.error(err));
    },
    
    
    renderAcclaimedMovies : (arrayMovies) => {
      arrayMovies.forEach((movie)=>{
        const moviesList = document.getElementsByClassName("acclaimed-movies")[0]
        const movieCard = document.createElement("div")
        movieCard.classList.add("card-movie")
        const anchor = document.createElement("a")
        const imageMovie = document.createElement("img")
       
        imageMovie.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        imageMovie.alt = movie.title
        anchor.href="./front/pages/detail.html"
        
        anchor.appendChild(imageMovie);
        movieCard.appendChild(anchor);
        moviesList.appendChild(movieCard);
    
      })
      
    }
  }
  
const crudMovies = {

    getAllMovies: () => {
            return fetch('http://localhost/movie-php-src/controlador/cargar_peliculas.php',{method: 'GET',headers: {'Content-Type': 'application/json',}})
            .then(result => result.json())
            .then(result => {return result})
            .catch((err)=>console.error(err))
    },
    
    addMovie: (newMovie) => {
        return fetch('http://localhost/movie-php-src/controlador/alta/alta_peliculas.php', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({newMovie})})
        .then((response) => {
            if (response.ok) response
            else (console.log('Error conection'))
        })
        .then(response=>{
            window.location.reload()
            alert('Película cargada con éxito');
            return response
        })
        .catch((err)=>console.error(err))
    },
    
    deleteMovie: () => {
        fetch('', Movies.deleteOptions)
        .then(response=>{
            if (response.status(204)) {
                console.log('Película eliminada con éxito')
            alert('')
            }
        })
    },
    
    updateMovie: () => {
        fetch('', Movies.putOptions)
        .then(response => {
            if (response.status===200) return response
            else (console.log('Error conection'))
        })
        .then(response => {
            alert('Película actualizada con éxito')
                console.log(response)
        })
    },
}

const renderMovies = {
    grid : (arrayMovies) => {
    
        arrayMovies.forEach(((movie)=>{
        
            
            const movieContainer = document.getElementsByClassName("grid-movies")[0]
    
            const cardMovie = document.createElement("div")
            const anchor = document.createElement("a")
            const imageMovie = document.createElement("img")
            const title = document.createElement("h4")
    
            cardMovie.classList.add("card-movie")
            anchor.href="./pages/detail.html"
    
            title.textContent=movie.titulo
            imageMovie.alt=movie.titulo
            imageMovie.src = `./front/assets/image/movies/trending/${movie.imagen}`
    
            anchor.appendChild(imageMovie);
            anchor.appendChild(title);
            cardMovie.appendChild(anchor);
            movieContainer.appendChild(cardMovie);
        }))
    },
    
    list : () => {
        const arrayMovies = getAllMovies()
        const movieList = document.getElementById("movie-list");
        arrayMovies.forEach(movie => {
            const movieContainer = document.createElement('div')
            const cardMovie = document.createElement('div')
            const infoMovie = document.createElement('div')
            const anchor = document.createElement('a')
            const imageMovie = document.createElement('img')
            const title = document.createElement('p')
            const director = document.createElement('p')
    
    
            cardMovie.classList.add("card-movie")
            anchor.href="./detail.html"
    
            title.textContent= movie.titulo;
            imageMovie.alt = movie.titulo;
            imageMovie.src = `../assets/image/movies/${title}`;
    
            anchor.appendChild(imageMovie)
            cardMovie.appendChild(anchor)
            infoMovie.appendChild(title)
            movieContainer.appendChild(infoMovie)
        });
    }

}


document.addEventListener('DOMContentLoaded', async () =>{
    const location = window.location.pathname.split('/');
    const path = location[location.length-1]
    console.log('PATH: ', path)
    const movies = await crudMovies.getAllMovies();
    console.log(movies)
    
    if (path=="index.html") {
        movies?renderMovies.grid(movies):{}
        apiMovies.getAcclaimedMovies()
    }
    if (path=="administrador.html") {
        movies?renderMovies.list(movies):{}
    }
    if(path=="alta_Peliculas.html") {
        const form = document.getElementById('form-movie')
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const data = {
                titulo: document.getElementById('inputNombre').value,
                fechaLanzamiento: document.getElementById('fecha').value,
                genero: document.getElementById('inputGenero').value,
                duracion: document.getElementById('inputDuracion').value,
                director: document.getElementById('select_directores').value,
                reparto: document.getElementById('inputReparto').value,
                sinopsis: document.getElementById('inputSinopsis').value,
                imagen: document.getElementById('inputImagen').value,
            }
            crudMovies.addMovie(data);
        })
    }
})

