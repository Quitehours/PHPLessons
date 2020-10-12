<?php
$title = "Array function";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";


$array = array (12, 12, 1, 13, 4, 5, 9,);

echo count($array)."<br/>";
//Кол-во елементов в массиве

sort($array);
print_r ($array);
echo "<br/>";
//Сортировка массива

rsort($array);
echo "<br/>";
//сортировка от большего к меньшему

$alist = array ("123" => 123, "12" => 3);
asort($array);
echo "<br/>";
//Для массивов с ключами, сохраняет их ключи arsort() - обрабатная сортировка

ksort($alist);
//Сортирует ключи по возрастанию, krsort()-по убыванию

shuffle($array);
print_r($array);
echo "<br/>";
//Перемешивает елементы массива

echo in_array(10,$array);
echo "<br/>";
//ищет значение в массиве boolean 1-elem found me, $array -array Found

$arr_1 = array (10,2);
$arr_2 = array (4,5, 7);

$array_3 = array_merge($arr_1, $arr_2);
print_r($array_3);
//Соединяет два массива в один

$arrDone = array (1, 2, 3, 4, 5, 6, 7);
array_slice($arrDone, 1, -2)
//аналог sub_str(), также обрезает строку, обрезка массивов
//3 значение беред два последних елемента с конца массива

?>