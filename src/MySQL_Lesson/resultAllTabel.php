<?php

function printResult($result_set) { 
    //fetch_assoc() - вытягивается первая запись с таблицы данных
    //Когда попадаем в while то в переменную $row будут заносится данные и она выступает массивом
    //
        while (($row = $result_set->$fetch_assoc()) != false) {
            print_r($row);
            // echo $row["login"];
            echo "<br/>";
        }
        //num_rows - выведит количество записей
        echo "количество записей равно - " . $result_set->num_rows . "<br/>-----------------------";
    }

$host = 'mysql';
$user = 'root';
$password = 'root';
$db_name = 'test';

//Подключение к базе данных
$mysqli = new mysqli($host, $user, $password, $db_name);
//Устанавлием правильную кодировку
// $mysqli->query("SET NAMES 'utf8'");

//Вывод таблицы: 
$result_set = $mysqli->query("SELECT * FROM `workers`");

printResult($result_set);

$mysqli->close(); 
