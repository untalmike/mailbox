<?php
require './helpers/poo.php';

$funciones = new funciones_php();
$return = array(
    'estatus' => '',
    'comentarios' => '',
    'data' => null
);

$data = json_decode(file_get_contents('php://input'));
$data_insert = $funciones->mysql_insert($data->from, $data->insert_values);
if ($data_insert) {
    $return['estatus'] = "Exito:";
    $return['comentarios'] = "Creado con exito";
}else{
    $return['estatus'] = "Error:";
    $return['comentarios'] = "No se creó el elemento";
};

echo json_encode($return);

?>