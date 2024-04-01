<?php

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$username = $data["username"];
$message = $data["message"];
$date = $data["date"];

$log = "[$date] $username: $message";
$jsonString = json_encode($log);

$file = "../../data/$username.txt";
file_put_contents($file, "{$log}\n", FILE_APPEND);

$path = "../../data/chat.txt";
file_put_contents($path, "{$log}\n", FILE_APPEND);
echo $jsonString;