<?php

$username = $_POST['username'];

/*if (!file_exists($filename)) {
    fopen($filename, "w");
}*/

$users = "../../data/users.txt";
if (!file_exists($users)) {
    fopen($users, "w");
}
//@Kelompok 1 PemWeb E Semester Genap 2023/2024

$existingUsernames = file($users, FILE_IGNORE_NEW_LINES);

if (in_array($username, $existingUsernames)) {
    echo 'Username already exists';
} else {
    file_put_contents($users, $username . "\n", FILE_APPEND);
    echo 'Username created successfully';
}