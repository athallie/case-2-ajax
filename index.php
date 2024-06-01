<?php
$c = isset($_GET['c']) ? $_GET['c'] : 'User';
$m = isset($_GET['m']) ? $_GET['m'] : 'index';

include_once "app/Controllers/Controller.php";
include_once "app/Controllers/$c.php";

$data = [];
if (isset($_GET["sender"])) {
    $data = $_GET;
} else {
    if (isset($_POST["sender"])) {
        $data = $_POST;
    } else {
        $data = json_decode(file_get_contents('php://input'), true);
    }
}

$controller = new $c($data);
$controller->$m();