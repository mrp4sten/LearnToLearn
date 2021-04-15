<?php

require_once '../vendor/autoload.php';

$client = new MongoDB\Client(
    'mongodb+srv://admin:leon12345@clustermaster.hxigy.mongodb.net/LearnToLearn?retryWrites=true&w=majority'
);
// $client = new MongoDB\Client();