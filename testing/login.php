<?php
error_reporting(0);

include "includes/db_login.php";

    $email = $_POST['email'];
    $pwd = $_POST['password'];
    
    init_login($email, $pwd);
?>