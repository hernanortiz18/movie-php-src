


    
    const postOptions = (data) => {return {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}}
    
    // deleteOptions : {method: 'DELETE', headers: {'Content-Type':'application/json'}, body: JSON.stringify({id})},
    
    // putOptions : (data) => { return {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}},

    const getAllDirectors = () => {
        fetch('http://localhost/movie-php-src/controlador/cargar_directores.php', {method: 'GET'})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            listDirectors(response)
        })
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
    // deleteDirector: (id) => {
    //     fetch('', Directors.deleteOptions)
    //     .then(response=>{
    //         if (response.status(204)) {
    //             console.log('Película eliminada con éxito')
    //             alert('')
    //         }
    //     })
    // },
    // updateDirector: (data) => {
    //     fetch('', Directors.putOptions)
    //     .then(response => {
    //         if (response.status===200) return response
    //         else (console.log('Error conection'))
    //     })
    //     .then(response => {
    //         alert('Película actualizada con éxito')
    //         console.log(response)
    //     })
    // }



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

document.addEventListener('DOMContentLoaded',()=>{
    getAllDirectors();
})