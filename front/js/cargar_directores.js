
document.addEventListener("DOMContentLoaded", () => {
    // Función para cargar los directores en el select
    console.log("en el javascript ");
    console.log("dentro de la función ");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../controlador/cargar_directores.php', true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            var directores = JSON.parse(this.responseText);
            var select = document.getElementById('select_directores');
            
            directores.forEach(function(director) {
                var option = document.createElement('option');
                option.value = director.id_director;
                option.textContent = director.d_nombre + ' ' + director.d_apellido;
                select.appendChild(option);
            });
        }
    };
    
    xhr.send();


});

