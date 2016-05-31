<?php
session_start();
include_once 'Dbconnect.php';
$content = mysql_real_escape_string($_POST['comment']);
$user_id = $_SESSION['user'];
$date = date('Y-m-d G:i:s');
mysql_query("INSERT INTO posts(user_id,date,content) VALUES('$user_id','$date','$content')");
?>

