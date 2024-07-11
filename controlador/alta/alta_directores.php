<?php
include '../ingresosDB/conn.php';
include_once '../Clases/director_class.php';
header("Access-Control-Allow-Origin: *"); // Permite todos los orígenes. Preferiblemente, especifica sólo los orígenes permitidos.
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); // Encabezados permitidos

//RECIBE EL Json
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // Insertar una nueva película
    $postBody = file_get_contents("php://input");// levanta el json del body
    $datos = json_decode($postBody,true);
   // print_r($datos);
   
   // parse_str($postBody, $datos);
    $director = new Director($datos["nombre"], $datos['apellido'], $datos['fechaNacimiento'], $datos['nacionalidad']);
   // print_r($director);
    $datosArray = $director->insertarDirector($director, $conn);  
}




/* Verificar que los campos del formulario no estén vacíos
if (!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['fechaNacimiento']) && !empty($_POST['nacionalidad'])) {
    // Crear un nuevo objeto Director
    $director = new Director($_POST['nombre'], $_POST['apellido'], $_POST['fechaNacimiento'], $_POST['nacionalidad']);

    // Preparar la sentencia
    $stmt = $conn->prepare("INSERT INTO directores (d_nombre, d_apellido, d_fecha_nacimiento, d_nacionalidad) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $director->nombre, $director->apellido, $director->fechaNacimiento, $director->nacionalidad);
    // Ejecutar la sentencia
    $stmt->execute();
        echo "Nuevo Director ingresado con exito";
        //cirre del sql y la conexión
        $stmt->close();
        $conn->close();
} else {
    echo "El Director no puedo ser ingresado con exito";
}
*/
?>