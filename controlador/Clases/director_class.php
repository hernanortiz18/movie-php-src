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
}
?>

