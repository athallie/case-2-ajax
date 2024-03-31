<?php

$username = $_POST['username'];
$filename = "../data/$username.txt";
if (!file_exists($filename)) {
    fopen($filename, "w");
}

$users = "../data/users.txt";
if (!file_exists($users)) {
    fopen($users, "w");
}

file_put_contents($users, $username . ",", FILE_APPEND);

echo 'Username created succesfully';