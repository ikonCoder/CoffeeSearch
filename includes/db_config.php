<?php
//Database connection.
$con = MySQLi_connect(
    "domain",//domain
    "uname",//uname
    "pwd",//pwd
    "database"//db
 );
 
 //Check connection
 if (MySQLi_connect_errno()) {
    echo "Failed to connect to MySQL: " . MySQLi_connect_error();
 }
 
?>