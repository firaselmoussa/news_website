<?php

header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE'); header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$servername = "localhost";
$dbname = 'newsdb';
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$query = mysqli_query($conn, 'SELECT * FROM news') ;

$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// closing the connection
mysqli_close($conn);

exit(json_encode($result));


?>