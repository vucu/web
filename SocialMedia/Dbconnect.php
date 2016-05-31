<?php
if(!mysql_connect("localhost","vucumagi_user","yDPLUaF%*w-+"))
{
     die('Connection error! --> '.mysql_error());
}
if(!mysql_select_db("vucumagi_misc"))
{
     die('Database selection error! --> '.mysql_error());
}
?>