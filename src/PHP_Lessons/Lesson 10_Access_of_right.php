<?php
$title = "Access of right";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";

echo __FILE__;
echo "<br/>";
echo fileperms(__FILE__);
chmod(__FILE__, 0777);//полный права доступа для всех пользователей

?>