document.addEventListener("DOMContentLoaded", ()=> {

    const validateEmail = () => {
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
    }

    const validatePassword = () => {
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
    }

    const validateName = () => {
        const nameUser = document.getElementsByClassName("input-name")[0];
        const errorMessage = document.getElementsByClassName("error-name")[0];
        if (nameUser.value.trim() === "") {
            errorMessage.textContent = "Se debe completar el campo Nombre"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    }

    const validateDate = () => {
        const dateUser = document.getElementsByClassName("input-date")[0];
        const errorMessage = document.getElementsByClassName("error-date")[0];
        if (dateUser.value.trim() === "") {
            errorMessage.textContent = "Completa el campo con tu fecha de nacimiento"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    }

    const validateLastName = () => {
        const lastNameUser = document.getElementsByClassName("input-lastName")[0];
        const errorMessage = document.getElementsByClassName("error-lastName")[0];
        if (lastNameUser.value.trim() === "") {
            errorMessage.textContent = "Se debe completar el campo Apellido"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    }

    const validateCountry = () => {
        const countryUser = document.getElementsByClassName("input-country")[0];
        const errorMessage = document.getElementsByClassName("error-country")[0];
        if (countryUser.value.trim() === "") {
            errorMessage.textContent = "Se debe completar el campo país"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    }

    const validateTerms = () => {
        const termsUser = document.getElementsByClassName("terms-check")[0];
        const errorMessage = document.getElementsByClassName("error-terms")[0];
        if (!termsUser.checked) {
            errorMessage.textContent = "Se deben aceptar sus terminos y condiciones"
            return false
        } else {
            errorMessage.textContent = "";
            return true
        }
    }

    const validateForm = () => {
        const email = validateEmail();
        const pass = validatePassword();
        const name = validateName();
        const lastName = validateLastName();
        const date = validateDate();
        const terms = validateTerms();
        const country = validateCountry();
        const errorForm = document.getElementsByClassName("error-form")[0];
        if (!email || !pass || !name || !lastName || !date || !terms || !country) {
            errorForm.textContent = "El formulario no está completo"
            return false;
        } else {
            errorForm.textContent = ""
            return true;
        }
    }

    const submitForm = document.getElementsByClassName("register")[0];
    
    submitForm.addEventListener("submit", (e) => {
        if (!validateForm()) {
            console.log("Errores en el formulario")
            e.preventDefault();
        } else {
            console.log("Enviado exitosamente")            
        }
    })

})