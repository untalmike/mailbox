<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

class funciones_php {

    public $BD_Server = "localhost";
    public $BD_Usuario = "root";
    public $BD_Password = "secret";
    public $BD_BD = "demo"; 
    public $BD_Puerto = 33060;

    public function connection_Server () {
        try{
            $conexion = new mysqli($this->BD_Server, $this->BD_Usuario, $this->BD_Password, $this->BD_BD);
            $conexion->set_charset("utf8mb4");
            if ($conexion->connect_errno) 
                return false;

            return $conexion;
        } catch (Exception $e) {
            return false;
        }
    }

    console.log(connection_Server());
}

