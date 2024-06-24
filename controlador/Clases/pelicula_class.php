<?php
class Director {
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
}
?>

