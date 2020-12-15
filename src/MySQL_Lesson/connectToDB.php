

<?php

$host = 'mysql';
$user = 'root';
$password = 'root';
$db_name = 'test';

//Подключение к базе данных
$mysqli = new mysqli($host, $user, $password, $db_name);
//Устанавлием правильную кодировку
$mysqli->query("SET NAMES 'utf8'");
//Поиск елементов в таблице. Запрос занесенный в переменную.
$checkDB = $mysqli->query("SELECT * FROM `workers` WHERE `name` = 'Fatima' OR `name` = 'Kurwa'");

//Показывает хранится что-то в "row" елементах.
var_dump($checkDB->num_rows);

//Проверка таблицы на наличие данных в таблице и добавление их при отсутсвие их.
if ($checkDB->num_rows) {
    
    echo 'Уже существует в базе';
    
} else {

    $mysqli->query("INSERT INTO `workers` (`id`, `name`, `age`, `salary`) VALUES (NULL, 'Fatima', '34', '15000'), (NULL, 'Kurwa', '22', '900000')"); 
    echo '<br/>' . 'Было добавлено в базу';
    
    }

//Закрывает запрос в базу, для того чтобы не перегрузить MySQL/db
