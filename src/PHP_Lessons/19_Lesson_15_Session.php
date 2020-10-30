<?php
session_start();//верхушка кода всегда

$num = isset($_SESSION["num"]) ? $_SESSION["num"]:0;
$num++;
$_SESSION["num"] = $num;
echo "Пользователь обновил страницу $num раз";
//Сессия хранится всего 15 минут, для каждой сессии. 

?>