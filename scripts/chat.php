<?php

$message = $_POST['message'];
$file = '../data/messages.txt';
file_put_contents($file, "{$message}\n", FILE_APPEND);
echo $message;

