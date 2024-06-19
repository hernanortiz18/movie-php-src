options = {
    method: 'GET',
    accept: 'application/json'
}

const getAllMovies = () => {
    fetch('../../controlador/cargar_peliculas.php', options)
    .then(response => response.json())
    .then(response => {listMovies(response)})
    .catch(err => console.error(err))
}

const listMovies = (arrayMovies) => {
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