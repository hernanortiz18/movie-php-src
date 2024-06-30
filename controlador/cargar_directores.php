<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
include './ingresosDB/conn.php';
// Consulta SQL para obtener los directores
$sql = "SELECT id_director, d_nombre, d_apellido FROM directores";
$resultado = $conn->query($sql);

$directores = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $directores[] = $fila;
        
    }
    
    // Devolver los datos como JSON
    echo json_encode($directores);
} else {
    echo 'Error en la consulta: ' . $conn->error;
}
?>