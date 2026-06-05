<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "feedback";

    $connect = mysqli_connect($host, $user, $password, $database);
    
    if(!$connect){
        die("Koneksi gagal". mysqli_connect_error());
    }
    $name = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $feed = filter_input(INPUT_POST, 'feedback', FILTER_SANITIZE_STRING);
    $rate = filter_input(INPUT_POST, 'rating', FILTER_SANITIZE_STRING);

    $connect = new mysqli($host, $user, $password, $database);
    if ($connect->connect_error) {
        die("Koneksi gagal: " . $connect->connect_error);
    } else {
        $stmt = $connect->prepare("INSERT INTO `feedback` (username, feedback, rating) VALUES (?, ?, ?)");
        $stmt->bind_param("ssis", $name, $feed, $rate);
        $stmt->execute();
    }  
    if ($stmt === false){
        die('Prepare failed:' . $connect->error);
    }
    $stmt->bind_param("sss", $name, $feed, $rate);

    if($stmt->execute()){
        echo "Your feedback has been recorded";
    } else {
        echo "error;" . $stmt->error;
    }

    $stmt->close();
    $conn->close();
?>