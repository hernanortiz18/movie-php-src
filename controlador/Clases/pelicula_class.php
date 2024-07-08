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
    function insertarPelicula($pelicula, $conn) {
          /*  $datos = json_decode($json, true);*/  
           // print_r($pelicula);  echo  $pelicula->titulo;       
            if (!empty($pelicula->titulo) && !empty($pelicula->fechaLanzamiento) && !empty($pelicula->genero) && !empty($pelicula->duracion) && !empty($pelicula->director) && !empty($pelicula->reparto) && !empty($pelicula->sinopsis) && !empty($pelicula->imagen)) {
                // Preparar la sentencia para insertar la película
                // $stmt = $conn->prepare("INSERT INTO peliculas (`titulo`, `fecha_lanzamiento`, `genero`, `duracion`, `director`, `reparto`, `sinopsis`, `imagen`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
                // $stmt->bind_param("ssssssss", $pelicula->titulo, $pelicula->fechaLanzamiento, $pelicula->genero, $pelicula->duracion, $pelicula->director, $pelicula->reparto, $pelicula->sinopsis, $pelicula->imagen);
                //     //ejecuta la sentencia
                //     $stmt->execute();
                //     echo "Nueva Película ingresado con exito";
                    // Obtener el ID de la película recién insertada
                        // $pelicula_id = $conn->insert_id;
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
    function modifPelicula($pelicula, $conn){
        try{
            if (!empty($pelicula->titulo) && !empty($pelicula->fechaLanzamiento) && !empty($pelicula->genero) && !empty($pelicula->duracion) && !empty($pelicula->director) && !empty($pelicula->reparto) && !empty($pelicula->sinopsis) && !empty($pelicula->imagen)) {
                $stmt = $conn->prepare("UPDATE peliculas SET titulo = ?, fecha_lanzamiento = ?, genero = ?, duracion = ?, director = ?, reparto = ?, sinopsis = ?, imagen = ? WHERE id = ?");
$stmt->bind_param("ssssssssi", $pelicula->titulo, $pelicula->fechaLanzamiento, $pelicula->genero, $pelicula->duracion, $pelicula->director, $pelicula->reparto, $pelicula->sinopsis, $pelicula->imagen, $pelicula->id);
// Ejecuta la sentencia
$stmt->execute();
            }
        }catch (Exception $e){

        }

        }




}

?>

