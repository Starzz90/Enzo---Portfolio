<?php
    $host = "localhost";
    $user = "root";
    $password = "ServBay.dev";
    $database = "feedback_center";

    $conn = mysqli_connect($host, $user, $password, $database);

    if(!$conn){
        die("Koneksi Gagal". mysqli_connect_error());
    }

?>