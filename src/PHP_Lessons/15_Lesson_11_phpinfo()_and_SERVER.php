<?php
$title = "phpinfo() and SERVER";
include_once "../MyWebSite/header.php"; //подключает файл 
include_once "../MyWebSite/footer.php"

phpinfo ();
//Вывод информация про php 


echo $_SERVER ['SERVER_ADDR'];
//Глобальный массив $SERVER хранить все информацию о пользователе
//который зашел на сервер

?>