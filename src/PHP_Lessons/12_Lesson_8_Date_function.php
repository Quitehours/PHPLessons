<?php
$title = "Date function";
include_once "../MyWebSite/header.php"; //подключает файл 
include_once "../MyWebSite/footer.php"

    echo time()."<br/>";//возвращает кол-во секунд прошедших с 1 января 1970 года
    //был основан UNIX

    echo microtime ()."<br/"; //Вывод в мили секундах 
    //замеры времени
    $start = microtime(true);
    echo "Время работы скрипта " . (microtime(true)-$start). "<br/>";

    $time = mktime (12,35,23,12,7,2007); //записывается дата 

    echo date("Y-m-d H:i:s", $time)."<br/>";//Вывод даты, времени

$array = getdate($time);
print_r($array)."<br/>" //выводи массивом дату

echo "<br/>".checkdate (12,02,2020);//проверка boolean сущетсвует ли такой день
    
?>