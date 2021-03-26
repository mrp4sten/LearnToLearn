<?php

require_once 'conexion.php';

$bd = $client->LearnToLearn;
$coleccion = $bd->usuarios;

$username = $_POST['username'];
$password = $_POST['password'];

$usuario = array();

$usuario['username'] = $username;
$usuario['password'] = $password;

$insertOneResult = $coleccion->insertOne($usuario);

// echo json_encode($insertOneResult);
