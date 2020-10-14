<!-- <!Doctype html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" /> 
</head>
<body> -->
<?php
$title = "Home page";
include_once "header.php"; //подключает файл 
include_once "footer.php";

const DIR = 'lessons';
$scan = scandir(DIR);
    for($i=2;$i<=count($scan);$i++ ){
?>
    <a href="<?= "/lessons/" . $scan[$i] ?>"><?= $scan[$i] ?></a><br/>
<?  
}
?>
<!-- </body>
</html> -->