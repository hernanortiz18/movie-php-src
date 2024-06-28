
    getOptions  = {method: 'GET',headers: {'Content-Type': 'application/json',}},
    
    
    
    deleteOptions  = {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},
    
    putOptions  = (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},
    
    getAllMovies = () => {
        fetch('../../controlador/cargar_peliculas.php', Movies.getOptions)
        .then(result => result.json())
        .then(result => {return result})
        .catch((err)=>console.error(err))
    },    
    addMovie = () => {
        fetch('../../controlador/alta_peliculas.php', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            title: document.getElementById('inputNombre').value,
            fechaLanzamiento: document.getElementById('fecha').value,
            genero: document.getElementById('inputGenero').value,
            duracion: document.getElementById('inputDuracion').value,
            reparto: document.getElementById('inputReparto').value,
            sinopsis: document.getElementById('inputSinopsis').value,
            imagen: document.getElementById('inputImagen').value,
            director: document.getElementById('inputDirector').value,
        })})
        .then((response) => {
            if (response.ok) {
                console.log(response) 
                return response}
            else (console.log('Error conection'))
        })
        .then(response=>{
            alert('Película cargada con éxito')
            console.log(response)
        })
        .catch((err)=>{
            alert('ERROR')
            console.error(err)})
    },    
    deleteMovie = (id) => {
        fetch('', Movies.deleteOptions)
        .then(response=>{
            if (response.status(204)) {
                console.log('Película eliminada con éxito')
                alert('')
            }
        })
    },
    updateMovie = (data) => {
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
    const submit = document.getElementById('submitForm');
    if (form) {
        form.addEventListener('click', (e)=>{
            e.preventDefault();
            addMovie();
        })
    }
} )