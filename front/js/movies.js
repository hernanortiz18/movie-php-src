const deleteOptions =  {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})}
   
const putOptions =  (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}}
    
const getAllMovies=  () => {
        fetch('../../controlador/cargar_peliculas.php',{method: 'GET',headers: {'Content-Type': 'application/json',}})
        .then(result => result.json())
        .then(result => {return result})
        .catch((err)=>console.error(err))
}

const addMovie = () => {
    fetch('../../controlador/alta/alta_peliculas.php', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
        titulo: document.getElementById('inputNombre').value,
        fechaLanzamiento: document.getElementById('fecha').value,
        genero: document.getElementById('inputGenero').value,
        duracion: document.getElementById('inputDuracion').value,
        director: document.getElementById('select_directores').value,
        reparto: document.getElementById('inputReparto').value,
        sinopsis: document.getElementById('inputSinopsis').value,
        imagen: document.getElementById('inputImagen').value,
    })})
    .then((response) => {
        if (response.status===201) return response
        else (console.log('Error conection'))
    })
    .then(response=>{
        alert('Película cargada con éxito')
        console.log(response)
    })
    .catch((err)=>console.error(err))
}    

const deleteMovie=  (id) => {
    fetch('', Movies.deleteOptions)
    .then(response=>{
        if (response.status(204)) {
            console.log('Película eliminada con éxito')
        alert('')
        }
    })
}

const updateMovie=  (data) => {
    fetch('', Movies.putOptions)
    .then(response => {
        if (response.status===200) return response
        else (console.log('Error conection'))
    })
    .then(response => {
        alert('Película actualizada con éxito')
            console.log(response)
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    const location = window.location.pathname.split('/');
    const path = location[location.length-1]
    console.log('PATH: ', path)
    form = document.getElementById('form-movie')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        addMovie();
    })
})

