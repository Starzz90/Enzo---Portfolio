<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "feedback";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo 'No feedback was submitted.';
    exit;
}

$name = trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING));
$feed = trim(filter_input(INPUT_POST, 'feedback', FILTER_SANITIZE_STRING));
$rate = trim(filter_input(INPUT_POST, 'rating', FILTER_SANITIZE_NUMBER_INT));

if (empty($name) || empty($feed) || empty($rate)) {
    die('Please complete all fields before submitting.');
}

$connect = mysqli_connect($host, $user, $password, $database);
if (!$connect) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

$stmt = mysqli_prepare($connect, "INSERT INTO `feedback` (`username`, `feedback`, `rating`) VALUES (?, ?, ?)");
if (!$stmt) {
    die('Prepare failed: ' . mysqli_error($connect));
}

mysqli_stmt_bind_param($stmt, "ssi", $name, $feed, $rate);

if (mysqli_stmt_execute($stmt)) {
    echo "Your feedback has been recorded.";
} else {
    echo "Error: " . mysqli_stmt_error($stmt);
}

mysqli_stmt_close($stmt);
mysqli_close($connect);
?>