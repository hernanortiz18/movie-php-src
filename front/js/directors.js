
// deleteOptions : {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},

// putOptions : (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},

export const crudDirector = {
    
    getAllDirectors: () => {
        return fetch('http://localhost/movie-php-src/controlador/cargar_directores.php', {method: 'GET', headers: {'Content-Type': 'application/json'}})
        .then(response=>response.json())
        .catch((err)=>console.error(err))
    },
    
    addDirector: (dataDirector) => {
        return fetch('http://localhost/movie-php-src/controlador/alta/alta_directores.php', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(dataDirector)})
        .then((response) => {
            if (response.ok) {
                alert('Película cargada con éxito')
                // window.location.reload()
            }
            else (console.log('Error conection'))
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
    },

}

const listDirectors = (arrayDirector) => {
    try{        
        const inputDirectors = document.getElementById('select_directores');
        arrayDirector.forEach((director)=>{
            let optionDirector = document.createElement('option')
            optionDirector.value = director.id_director;
            optionDirector.textContent = `${director.d_nombre} ${director.d_apellido}`
            inputDirectors.appendChild(optionDirector)
        })
    } catch (error) {
        console.log('Error: ', error)
    }

}

document.addEventListener('DOMContentLoaded', async () => {
    const pathArray = window.location.pathname.split('/');
    const path = pathArray[pathArray.length-1]
    console.log('PATH: ', path)
    const directors = await crudDirector.getAllDirectors();
    if (path==="alta_Peliculas.html"){
        listDirectors(directors);
    }
})

