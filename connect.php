<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$host = "localhost";
$user = "root";
$password = "";
$database = "feedback";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo 'No feedback was submitted. Please submit the form from the feedback page.';
    exit;
}

$name = trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$feed = trim(filter_input(INPUT_POST, 'feedback', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$rate = filter_input(INPUT_POST, 'rating', FILTER_VALIDATE_INT, [
    'options' => [
        'min_range' => 1,
        'max_range' => 5,
    ],
]);

if ($name === '' || $feed === '' || $rate === false) {
    die('Please complete all fields and enter a rating between 1 and 5.');
}

$connect = mysqli_connect($host, $user, $password, $database);
if (!$connect) {
    die("Database connection failed: " . mysqli_connect_error());
}

mysqli_set_charset($connect, 'utf8mb4');

$query = "INSERT INTO `feedbacks` (`Username`, `Feedback`, `Rating`) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($connect, $query);
if (!$stmt) {
    die('Prepare failed: ' . mysqli_error($connect));
}

mysqli_stmt_bind_param($stmt, 'ssi', $name, $feed, $rate);

if (!mysqli_stmt_execute($stmt)) {
    die('Execute failed: ' . mysqli_stmt_error($stmt));
}

mysqli_stmt_close($stmt);
mysqli_close($connect);

echo 'Your feedback has been recorded successfully.';
?>