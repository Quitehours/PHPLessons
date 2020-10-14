<?php
// $title = "Cookie";
//  include_once "../header.php"; //подключает файл 
//  include_once "../footer.php";

// $a = 0;
// $a++;

// setcookie("num", 10, time ()+7);
// //
// if(isset($_COOKIE["num"]))
// echo "Кука установлена";
// else
// echo "Кука не установлена";

$num = isset($_COOKIE["num"]) ? $_COOKIE["num"]:0;
$num++;
setcookie("num", $num, time ()+4);
echo "Пользователь обновил страницу $num раз";
?>