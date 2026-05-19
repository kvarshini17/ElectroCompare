<?php
// register.php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['full_name'];
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $pass);

    if ($stmt->execute()) {
        header("Location: ../login.html?registered=success");
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
