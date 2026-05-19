<?php
// db.php - Database Connection
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "electrocompare";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
