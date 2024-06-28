<?php

header("Access-Control-Allow-Origin: *"); // Permite el acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Permite métodos GET, POST y OPTIONS
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Permite estos encabezados

include './ingresosDB/conn.php';

// Consulta SQL para obtener las películas
$sql = "SELECT * FROM peliculas";
$resultado = $conn->query($sql);

$peliculas = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $peliculas[] = $fila;
        
    }
    
    // Devolver los datos como JSON
    echo json_encode($peliculas);
} else {
    echo 'Error en la consulta: ' . $conn->error;
}
?>