<?php
$title = "String function";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";



$string = "This is example";
echo strlen($string)."<br/>";
//strlen() Выводит длину строки 

echo strpos($string, "exa", 4)."<br/>";
//strpos() Ищет елемент в строковом массиве, число дает разрешение считать с этого индекса строкового массива

if(strpos ($string, "T")===false) 
//проверка на тип ===
echo "T не найдено";
else
echo "T найдено";

echo substr($string, 3)."<br/>";
//обрезает строку substr($обрезает с этого текстового массива; 3-удаляет столько последовательных елементов;)
//если добавить через запятую еще одно число, то он обрежет поц центру от 2 до 7
//-2 удаляет с конца массива


echo str_replace("is", "abc", $string)."<br/>";
//ЗАменяет елемент 1 на елемент 2 в массиве строковом.
 
$str="<b>Хаха, жирный шрифт</b>";
echo htmlspecialchars($str)."<br/>";
//Виводит все теги, как текст

echo strtolower($string)."<br/>".strtoupper($string)."<br/>";
//выводит текст вверххенем и нижнем регистре

echo md5("123")."<br/>";
//Функция для трансформирования паролей, шифрует пароли на сайте

echo trim("     string     ds ds   ");
//Удаляет пробелы в текстовом массиве
?>