import { Directors } from "./utils"

const {getAllDirectors} = Directors;

const listDirectors = (arrayDirector) => {

    const arrayDirector = getAllDirectors()
    const inputDirectors = document.getElementById('select_directores')
    arrayDirector.forEach((director)=>{
        optionDirector = document.createElement('option')
        optionDirector.value = director.id_director;
        optionDirector.textContent = `${director.d_nombre} ${director.d_apellido}`
        inputDirectors.appendChild(optionDirector)
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    listDirectors();
})