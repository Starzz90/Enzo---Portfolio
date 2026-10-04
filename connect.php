<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "register";

    $conn = mysqli_connect($host, $user, $password, $database);

    if(!$conn){
        die("Koneksi Gagal". mysqli_connect_error());
    }

?>