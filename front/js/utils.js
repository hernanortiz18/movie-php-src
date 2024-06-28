const Movies = {
    getOptions : {method: 'GET',headers: {'Content-Type': 'application/json',}},
    
    postOptions : (data) => {return {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}},
    
    deleteOptions : {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},
    
    putOptions : (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},
    
    getAllMovies: () => {
        fetch('../../controlador/cargar_peliculas.php', Movies.getOptions)
        .then(result => result.json())
        .then(result => {return result})
        .catch((err)=>console.error(err))
    },    
    addMovie: (data) => {
        fetch('../../controlador/alta/alta_peliculas.php', Movies.postOptions(data))
        .then((response) => {
            if (response.status===201) return response
            else (console.log('Error conection'))
        })
        .then(response=>{
            alert('Película cargada con éxito')
            console.log(response)
        })
        .catch((err)=>console.error(err))
    },    
    deleteMovie: (id) => {
        fetch('', Movies.deleteOptions)
        .then(response=>{
            if (response.status(204)) {
                console.log('Película eliminada con éxito')
                alert('')
            }
        })
    },
    updateMovie: (data) => {
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
}

const Directors = {

    getOptions : {method: 'GET',headers: {'Content-Type': 'application/json',}},
    
    postOptions : (data) => {return {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}},
    
    deleteOptions : {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},
    
    putOptions : (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},

    getAllDirectors: () => {
        fetch('../../controlador/cargar_directores.php', Directors.getOptions)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            return data
        })
        .catch(err=>console.error(err))
    },

    addDirector: (data) => {
        fetch('../../controlador/alta/alta_peliculas.php', Directors.postOptions(data))
        .then((response) => {
            if (response.status===201) return response
            else (console.log('Error conection'))
        })
        .then(response=>{
            alert('Película cargada con éxito')
            console.log(response)
        })
        .catch((err)=>console.error(err))
    },    
    deleteDirector: (id) => {
        fetch('', Directors.deleteOptions)
        .then(response=>{
            if (response.status(204)) {
                console.log('Película eliminada con éxito')
                alert('')
            }
        })
    },
    updateDirector: (data) => {
        fetch('', Directors.putOptions)
        .then(response => {
            if (response.status===200) return response
            else (console.log('Error conection'))
        })
        .then(response => {
            alert('Película actualizada con éxito')
            console.log(response)
        })
    }

}

export default {Directors, Movies};