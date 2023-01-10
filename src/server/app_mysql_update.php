<?php
require './helpers/poo.php';

$funciones = new funciones_php();
$return = array(
    'estatus' => '',
    'comentarios' => '',
    'data' => null
);
$data_lista_encuestas = $funciones->mysql_update($_POST['from'], $_POST['set'], $_POST['where']);
if ($data_lista_encuestas) {
    $return['estatus'] = "Exito:";
    $return['comentarios'] = "Actualizado con exito";
}else{
    $return['estatus'] = "Error:";
    $return['comentarios'] = "No se actualizo";
}

echo json_encode($return);

?>