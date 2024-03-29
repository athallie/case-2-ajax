<?php

$username = $_POST['username'];
$filename = "../data/$username.txt";
if (!file_exists($filename)) {
    fopen($filename, "w");
}

echo 'Username created succesfully';
