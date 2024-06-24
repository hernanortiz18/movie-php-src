<?php
class Director {
    public $nombre;
    public $apellido;
    public $fechaNacimiento;
    public $pais;

    public function __construct($nombre, $apellido, $fechaNacimiento, $pais) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->pais = $pais;
    }
}
?>

