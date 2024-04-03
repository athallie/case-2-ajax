<?php

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$username = $data["username"];
$message = $data["message"];
$date = $data["date"];
//@Kelompok 1 PemWeb E Semester Genap 2023/2024
$log = "[$date] $username: $message";
$jsonString = json_encode($log);

$path = "../../data/chat.txt";
file_put_contents($path, "{$log}\n", FILE_APPEND);
echo $jsonString;