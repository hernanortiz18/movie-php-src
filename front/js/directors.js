import utils from './utils';

const {Directors} = utils;

const listDirectors = async() => {
    try{
        const arrayDirector = await Directors.getAllDirectors();
        console.log(arrayDirector)
        const inputDirectors = document.getElementById('select_directores')
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
    listDirectors();
})