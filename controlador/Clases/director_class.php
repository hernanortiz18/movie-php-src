<?php
class Director {
    public $nombre;
    public $apellido;
    public $fechaNacimiento;
    public $nacionalidad;
    public function __construct($nombre, $apellido, $fechaNacimiento, $nacionalidad) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->nacionalidad = $nacionalidad;
    } 
    
    function insertarDirector($director, $conn) {
      try{  
        if (!empty($director->nombre) && !empty($director->apellido) && !empty($director->fechaNacimiento) && !empty($director->nacionalidad)) {
     
            // Preparar la sentencia
            $stmt = $conn->prepare("INSERT INTO directores (d_nombre, d_apellido, d_fecha_nacimiento, d_nacionalidad) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $director->nombre, $director->apellido, $director->fechaNacimiento, $director->nacionalidad);
            // Ejecutar la sentencia
            $stmt->execute();
                echo "Nuevo Director ingresado con exito";
             //   respuestaJson(200, 'Director insertado correctamente');
                //cirre del sql y la conexión
                $stmt->close();
                $conn->close();
        } else {
            echo "El Director no puedo ser ingresado con exito";
         //   respuestaJson(500, 'No se pudo ingresar el director');
            }
        }catch (Exception $e){
            echo "El Director no puedo ser ingresado con exito";
          //  respuestaJson(500, 'No se pudo ingresar el director');
            echo "Error: " . $e->getMessage();

        }
       /* function respuestaJson($statusCode, $response) {
            http_response_code($statusCode);
            echo json_encode($response);
            exit(); // die finalizar el script 
        } */  
}

}
?>

