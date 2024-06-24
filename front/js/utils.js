const getOptions = {method: 'GET',headers: {'Content-Type': 'application/json',},body: JSON.stringify(result)}

const postOptions = (data) => {return {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}}

const deleteOptions = {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify(result)}

const putOptions = (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}}

export const getAllMovies = () => {
    fetch('../../controlador/cargar_peliculas.php', getOptions)
    .then(result => result.json)
    .then(result => {return result})
    .catch((err)=>console.error(err))
}

export const addMovie = (data) => {
    fetch('../../controlador/alta/alta_peliculas.php', postOptions(data))
    .then((response) => {
        if (response.status(201)) return response
        else (console.log('Error conection'))
    })
    .then(response=>{
        alert('Película cargada con éxito')
        console.log(response)
    })
    .catch((err)=>console.error(err))
}

export const deleteMovie = (id) => {
    fetch('', deleteOptions)
    .then(response=>{
        if (response.status(204)) {
            console.log('Película eliminada con éxito')
            alert('')
        }
    })
}

export const updateMovie = (data) => {
    fetch('', putOptions)
    .then(response => {
        if (response.status(200)) return response
        else (console.log('Error conection'))
    })
    .then(response => {
        alert('Película actualizada con éxito')
        console.log(response)
    })
}