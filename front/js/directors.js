options = {
    method: 'GET',
    headers:{'Content-Type': 'application/json',},
}

const getDirectors = () => {
    fetch(`../../controlador/cargar_directores.php`, options)
    .then(response => response.json())
    .then(response => {listDirectors(response)})
    .catch(err => console.error(err))
}

const listDirectors = (arrayDirector) => {
    const inputDirectors = document.getElementById('select_directores')
    arrayDirector.forEach((director)=>{
        optionDirector = document.createElement('option')
        optionDirector.value = director.id_director;
        optionDirector.textContent = `${director.d_nombre} ${director.d_apellido}`
        inputDirectors.appendChild(optionDirector)
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    getDirectors();
})