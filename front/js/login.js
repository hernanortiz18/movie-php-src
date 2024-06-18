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
        if (pass.value.trim() ==''){
            errorMessage.textContent = "Se debe completar el campo Password"
            return false;
        } else {
            errorMessage.textContent = ""
            return true;
        }
    }

    const validateForm = () => {
        const email = validateEmail();
        const pass = validatePassword();
        const errorForm = document.getElementsByClassName("error-form")[0];
        if (!email || !pass) {
            errorForm.textContent = "El formulario no está completo"
            return false;
        } else {
            errorForm.textContent = ""
            return true;
        }
    }

    const submitForm = document.getElementsByClassName("login-form")[0];
    
    submitForm.addEventListener("submit", (e) => {
        if (!validateForm()) {
            console.log("Errores en el formulario")
            e.preventDefault();
        } else {
            console.log("Enviado exitosamente")            
        }
    })

})