<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
ini_set("display_errors", "1");

class funciones_php {
    public $BD_Server = "";
    public $BD_Usuario = "";
    public $BD_Password = "";
    public $BD_BD = ""; 
    //public $BD_Puerto = ;
    
    public function Conexion_BD(){
        try{
            $conexion = new mysqli($this->BD_Server, $this->$BD_Puerto, $this->BD_Usuario, $this->BD_Password, $this->BD_BD);
            $conexion->set_charset("utf8mb4");
            if ($conexion->connect_errno) 
                return false;

            return $conexion;
        }catch (Exception $e) {
            return false;
        }
    }

    public function mysql_select_libre($query){
        $conexion = $this->Conexion_BD();
        $return = [];
        if (!$conexion) 
            throw new Exception('falla en conectar la bd');

        if ($consulta = $conexion->query($query)) {
            while($row = $consulta->fetch_assoc()){
                array_push($return, $row);
            }
            $consulta->free();
            $conexion->close();
        }

        return (count($return) === 0? false: $return);
    }

    public function mysql_update($from, $set, $where){
        $conexion = $this->Conexion_BD();
        $return = false;
        if (!$conexion) 
            throw new Exception('falla en conectar la bd');

            if ($conexion->query(" UPDATE $from SET $set WHERE $where ")) {
            $return = true;
        }

        return $return;
    }
    
    public function mysql_select($from, $orderby, $where = '', $limit = ''){
        $conexion = $this->Conexion_BD();
        $return = [];
        if (!$conexion) 
            throw new Exception('falla en conectar la bd');

        if ($consulta = $conexion->query(" SELECT * FROM $from $where ORDER BY $orderby DESC $limit")) {
            while($row = $consulta->fetch_assoc()){
                array_push($return, $row);
            }
            $consulta->free();
            $conexion->close();
        }
        return (count($return) === 0? false: $return);
    }

    public function mysql_insert($from, $insert_values){
        $conexion = $this->Conexion_BD();
        $return = false;
        if (!$conexion)
            throw new Exception('falla en conectar la bd');
            if ($conexion->query("  INSERT INTO $from VALUES($insert_values)  ")) {
                $return = true;
            };
        return $return;
    }
}
?>


