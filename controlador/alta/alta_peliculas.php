<?php
include '../ingresosDB/conn.php';
include '../Clases/pelicula_class.php';
//RECIBE EL Json
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // Insertar una nueva película
    $postBody = file_get_contents("php://input");// levanta el json del body
    $datos = json_decode($postBody,true);
   // print_r($datos);
    $peliculas = new Pelicula($datos["titulo"],$datos["fechaLanzamiento"],$datos["genero"],$datos["duracion"],$datos["id_director"],$datos["reparto"],$datos["sinopsis"],$datos["imagen"]);
    $datosArray = $peliculas->insertarPelicula($peliculas,$conn);
}

/*function respuestaJson($statusCode, $response) {
    http_response_code($statusCode);
    echo json_encode($response);
    exit(); // die finalizar el script
}*/





/* Verificar que los campos del formulario no estén vacíos, deben venir todos los datos
if (!empty($_POST['titulo']) && !empty($_POST['fecha_lanzamiento']) && !empty($_POST['genero']) && !empty($_POST['duracion']) && !empty($_POST['id_director']) && !empty($_POST['reparto']) && !empty($_POST['sinopsis']) && !empty($_POST['imagen'])) {
   
    // Crear un nuevo objeto Película
    $pelicula = new Pelicula($_POST['titulo'], $_POST['fecha_lanzamiento'], $_POST['genero'], $_POST['duracion'], $_POST['id_director'], $_POST['reparto'], $_POST['sinopsis'], $_POST['imagen']);

       // Preparar la sentencia para insertar la película
       $stmt = $conn->prepare("INSERT INTO peliculas (`titulo`, `fecha_lanzamiento`, `genero`, `duracion`, `director`, `reparto`, `sinopsis`, `imagen`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
       $stmt->bind_param("ssssssss", $pelicula->titulo, $pelicula->fechaLanzamiento, $pelicula->genero, $pelicula->duracion, $pelicula->director, $pelicula->reparto, $pelicula->sinopsis, $pelicula->imagen);
        //ejecuta la sentencia
        $stmt->execute();
        echo "Nueva Película ingresado con exito";
        // Obtener el ID de la película recién insertada
            $pelicula_id = $conn->insert_id;
             // Preparar la sentencia para insertar en directores_peliculas
                $stmt = $conn->prepare("INSERT INTO directores_peliculas (pelicula_id, director_id) VALUES (?, ?)");
                $stmt->bind_param("ii", $pelicula_id, $_POST['id_director']);//ver de reemplazar por $plicula->director
             // Ejecutar la sentencia
                $stmt->execute();
                echo "Relación Director-Película ingresada con éxito";   
        //cirre del sql y la conexión
        $stmt->close();
        $conn->close();
} else {
    echo "La Película no puedo ser ingresada con exito";
}*/
?>