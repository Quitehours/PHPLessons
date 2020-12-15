<?
// Удобно получаем данные с метода POST
$data = [
    "title" => $_POST['title'],
    "content" => $_POST['content']
];

// Подключение к базе данных (Новый способ!)
$connection = new PDO('mysql:dbname=example01;host=mysql', 'root', 'root');
// готовим строку которую будет парсить база ( :title) - это метки 
$sql = 'INSERT INTO posts (title, content) VALUES (:title, :content)';
// С помщью prepare добавляеться значение в базу 
$statement = $connection->prepare($sql);
// execute - запускает подоготволенный вопрос на выполнение
$result = $statement->execute($data);

var_dump($result);
