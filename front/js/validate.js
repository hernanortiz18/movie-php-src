import { crudDirector } from "./directors.js";
import { crudMovies } from "./movies.js";

const validate = {
    validatePass: () => {
        const pass = document.getElementsByClassName("input-password")[0];
        const errorMessage = document.getElementsByClassName("error-password")[0];
        const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (pass.value.trim() ==''){
            errorMessage.textContent = "Se debe completar el campo Password"
            return false;
        } else if (!passFormat.test(pass.value)) {
            errorMessage.textContent = "Debe incluír 1 Mayuscula, 1 minuscula, 1 especial, 8 caracteres"
            return false;
        } else {
            errorMessage.textContent = ""
            return true;
        }
    },
    
    validateEmail: () => {
        const email = document.getElementsByClassName("input-email")[0];
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorMessage = document.getElementsByClassName("error-email")[0];
        if (email.value.trim() == "") {
            errorMessage.textContent = "Se debe completar el campo E-mail"
            return false;
        } else if (!emailFormat.test(email.value)){
            errorMessage.textContent = "El formato del E-mail es incorrecto"    
            return false;
        } else {
            errorMessage.textContent = ""
            return true;
        } 
    },

    validateText: (nameImput) => {
        const input = document.getElementsByClassName(`input-${nameImput}`)[0];
        const errorMessage = document.getElementsByClassName(`error-${nameImput}`)[0];
        if (input.value.trim() === "") {
            errorMessage.textContent = `Se debe completar el campo ${nameImput}`
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    },

    validateCheck: (nameInput) => {
        const input = document.getElementsByClassName(`${nameInput}-check`)[0];
        const errorMessage = document.getElementsByClassName(`error-${nameInput}`)[0];
        if (!input.checked) {
            errorMessage.textContent = "Se debe aceptar el campo"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    },
}

document.addEventListener('DOMContentLoaded', () => {
    const location = window.location.pathname.split('/');
    const path = location[location.length-1]
    console.log('PATH: ', path)
    if (path==="register.html"){
        const form = document.getElementById("form-register");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const validForm = () => {
                const emailValid = validate.validateEmail();
                const passValid = validate.validatePass();
                const nameValid = validate.validateText('name');
                const lastNameValid = validate.validateText('lastName');
                const dateValid = validate.validateText('date');
                const termsValid = validate.validateCheck('terms');
                const countryValid = validate.validateText('country');
                if (!emailValid || !passValid || !nameValid || !lastNameValid || !dateValid || !termsValid || !countryValid) {
                    alert("El formulario no está completo, verifica los campos")
                    return false;
                } else {
                    return true;
                }
            }
            if(!validForm()){
                console.log("Errores en el formulario")
            } else {
                
                console.log("Enviado exitosamente")
            }
        })
    }
    if (path==="login.html"){
        const form = document.getElementById("form-login");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const validForm = () => {
                const emailValid = validate.validateEmail();
                const passValid = validate.validatePass();
                if (!emailValid || !passValid){
                    alert("El formulario no está completo, verifica los campos")
                    return false
                } else {
                    return true
                }
            }
            if (!validForm()){
                console.log("Errores en el formulario")
            } else {
                console.log("Enviado exitosamente")
            }
        })
    }
    if(path==="alta_director.html"){
        const form = document.getElementById("formDirector");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const validForm = () =>{
                const nameValid = validate.validateText('name');
                const lastNameValid = validate.validateText('lastName');
                const countryValid = validate.validateText('country');
                const dateValid = validate.validateText('date');
                if (!nameValid || !lastNameValid || !countryValid || !dateValid){
                    return false
                } else {
                    return true
                }
            }
            if (!validForm()){
                console.log("Errores en el formulario")
            } else {
                const newDirector = {
                    nombre: document.getElementById("inputNombre").value,
                    apellido: document.getElementById("inputApellido").value,
                    fechaNacimiento: document.getElementById("fecha").value,
                    nacionalidad: document.getElementById("nacionalidad").value,
                }
                crudDirector.addDirector(newDirector)
                console.log("Enviado exitosamente")
            }
        })
    }
    if(path==="alta_Peliculas.html"){
        const form = document.getElementById("form-movie");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const validForm = () =>{
                const titleValid = validate.validateText('title');
                const dateValid = validate.validateText('date');
                const durationValid = validate.validateText('genre');
                const genreValid = validate.validateText('duration');
                const directorValid = validate.validateText('director');
                const castValid = validate.validateText('cast');
                const synopsisValid = validate.validateText('synopsis');
                const imageValid = validate.validateText('image');
                if (!titleValid || !durationValid || !genreValid || !dateValid || !directorValid || !castValid || !synopsisValid || !imageValid){
                    return false
                } else {
                    return true
                }
            }
            if (!validForm()){
                console.log("Errores en el formulario")      
            } else {
                const newMovie = {
                    titulo: document.getElementById('inputNombre').value,
                    fechaLanzamiento: document.getElementById('fecha').value,
                    genero: document.getElementById('inputGenero').value,
                    duracion: document.getElementById('inputDuracion').value,
                    id_director: document.getElementById('select_directores').value,
                    reparto: document.getElementById('inputReparto').value,
                    sinopsis: document.getElementById('inputSinopsis').value,
                    imagen: document.getElementById('inputImagen').value,
                }
                console.log('INFORMACION QUE SE ENVIA A ADD MOVIE', newMovie)
                crudMovies.addMovie(newMovie);
                console.log("Enviado exitosamente")
            }
        })
    }
})