<?php
class Pelicula {
    public $titulo;
    public $fechaLanzamiento;
    public $genero;
    public $duracion;
    public $director;
    public $reparto;
    public $sinopsis;
    public $imagen;
    public function __construct($titulo, $fechaLanzamiento, $genero, $duracion, $director, $reparto, $sinopsis, $imagen) {
        $this->titulo = $titulo;
        $this->fechaLanzamiento = $fechaLanzamiento;
        $this->genero = $genero;
        $this->duracion = $duracion;
        $this->director = $director;
        $this->reparto = $reparto;
        $this->sinopsis = $sinopsis;
        $this->imagen = $imagen;
    }

   
public function insertarPelicula($json) {
            /* paso los datos del json a un array*/ 
            $datos = json_decode($json, true);

        // Crear un nuevo objeto Película
        $pelicula = new Pelicula($datos['titulo'], $datos['fecha_lanzamiento'], $datos['genero'], $datos['duracion'], $datos['id_director'], $datos['reparto'], $datos['sinopsis'], $datos['imagen']);
        
        if (!empty($pelicula['titulo']) && !empty($pelicula['fecha_lanzamiento']) && !empty($pelicula['genero']) && !empty($pelicula['duracion']) && !empty($pelicula['id_director']) && !empty($pelicula['reparto']) && !empty($pelicula['sinopsis']) && !empty($pelicula['imagen'])) {
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
    }
}

function respuestaJson($statusCode, $response) {
    http_response_code($statusCode);
    echo json_encode($response);
    exit(); // die finalizar el script
}

}

?>

