<?php
include "db_config.php";


if( isset($_POST['f_email']) and isset($_POST['f_password']) and isset($_POST['date']) and isset($_POST['uid']) ){

    $email = $_POST['f_email'];
    $pass = $_POST['f_password'];
    $date = $_POST['date'];
    $uid = $_POST['uid'];

    //check if the account already exist
    $dupQuery = " SELECT email FROM users WHERE email = '$email' ";
    $result = $conn->query($dupQuery);
    
    if($result->num_rows > 0){
        echo "acc_exists";
    }else{
        $insertQuery = " INSERT INTO users (email,password,date_created,userId) VALUES ('$email','$pass','$date','$uid') ";
        $conn->query($insertQuery);
        $conn->close();
        echo "new_acc";
    }

}   
?>