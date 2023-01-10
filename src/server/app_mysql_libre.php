<?php
require './helpers/poo.php';

$funciones = new funciones_php();
$return = array(
    'estatus' => '',
    'comentarios' => '',
    'data' => []
);

$data = json_decode(file_get_contents('php://input'));
$data_lista_encuestas = $funciones->mysql_select_libre($data->query);
if ($data_lista_encuestas) {
    $return['estatus'] = "Exito:";
    $return['data'] = $data_lista_encuestas;
}else{
    $return['estatus'] = "Falla:";
    $return['data'] = [];
    $return['comentarios'] = "Lista no obtenida";
}

echo json_encode($return);

?>