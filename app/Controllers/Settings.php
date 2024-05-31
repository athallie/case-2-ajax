<?php

class Settings
{

}

/*$username = array_keys($_FILES)[0];

$picFile = $_FILES["$username"];
$picName = $username . "." . pathinfo($picFile["name"], PATHINFO_EXTENSION);
$tmp = $picFile["tmp_name"];

$pics = "../../data/profile-pics/$picName";
$profilePics = "../../data/profile-pics.txt";
if (!file_exists($profilePics)) {
    fopen($profilePics, "w");
}
//@Kelompok 1 PemWeb E Semester Genap 2023/2024
move_uploaded_file($tmp, $pics);
file_put_contents($profilePics, $picName . "\n");

echo $picName;*/