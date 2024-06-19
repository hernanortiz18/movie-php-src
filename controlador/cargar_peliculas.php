<?php
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