<?php

require_once 'conexion.php';

$bd = $client->LearnToLearn;
$coleccion = $bd->usuarios;

$username = $_POST['username'];
$password = $_POST['password'];

$document = $coleccion->findOne(['username' => $username]);


if ($document == '') {
    echo json_encode('0');
} else {
    if ($document['password'] != $password) {
        echo json_encode('contraseña incorrecta');
    } else {
        session_start();
        $_SESSION['USUARIO'] = $username;
        echo json_encode($_SESSION['USUARIO']);
    }
}
