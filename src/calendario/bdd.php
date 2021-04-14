<?php
try
{
	//$bdd = new PDO('mysql:host=localhost;dbname=calendar;charset=utf8', 'root', '');
        $bdd = new PDO('mysql:host=bnlyy171w2xi8thuonhv-mysql.services.clever-cloud.com;dbname=bnlyy171w2xi8thuonhv;charset=utf8', 'unbskynv7pqzppgj', '9OwoLSjm5pg7wurUobbu');
}
catch(Exception $e)
{
        die('Error : '.$e->getMessage());  
}
