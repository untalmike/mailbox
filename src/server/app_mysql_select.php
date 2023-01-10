<?php
require './helpers/poo.php';

$funciones = new funciones_php();
$return = array(
    'estatus' => '',
    'comentarios' => '',
    'data' => ''
);
$data_lista_encuestas = $funciones->mysql_select($_POST['from'], $_POST['order_by'], isset($_POST['where'])? "WHERE $_POST[where]": '');
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