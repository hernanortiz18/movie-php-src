const postOptions = (data) => {return {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}}
    
// deleteOptions : {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},
    
// putOptions : (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},

const getAllDirectors = () => {
    return fetch('http://localhost/movie-php-src/controlador/cargar_directores.php', {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(response=>response.json())
    .catch((err)=>console.error(err))
}

const addDirector= (data) => {
    fetch('http://localhost/movie-php-src/controlador/alta/alta_directores.php', postOptions(data))
    .then((response) => {
        if (response.ok) return response
        else (console.log('Error conection'))
    })
    .then(response=>{
        alert('Película cargada con éxito')
        console.log(response)
     })
    .catch((err)=>console.error(err))
}
const deleteDirector = (id) => {
    fetch('', Directors.deleteOptions)
    .then(response=>{
    if (response.status(204)) {
    console.log('Película eliminada con éxito')
    alert('')
    }
    })
}
const updateDirector = (data) => {
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



const listDirectors = (arrayDirector) => {
    try{        
        const inputDirectors = document.getElementById('select_directores');
        arrayDirector.forEach((director)=>{
            optionDirector = document.createElement('option')
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
    const directors = await getAllDirectors();
    if (path==="alta_Peliculas.html"){
        listDirectors(directors);
    }
})