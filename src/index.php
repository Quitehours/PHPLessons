<?php
$title = "Home page";
include_once "header.php"; //подключает файл 
include_once "footer.php";
?>

<div style="width:500px; height:500px; background-color:yellow; float:left">
<h1 align="center">PHP Lessons</h1>
<?php
const DIR = 'PHP_Lessons';
$scan = scandir(DIR);
    for($i=2;$i<=count($scan);$i++ ){
?>
    <a href="<?= "/PHP_Lessons/" . $scan[$i] ?>"><?= $scan[$i] ?></a><br/>
<?  
}
?>
</div>

<div style="width:500px; height:500px; background-color:rgb(102, 102, 153); float:left">
<h1 align="center">CSS Lessons</h1>
<?php
const CSSDIR = 'CSS_Lesson';
$scanCSS = scandir(CSSDIR);
    for ($i=2;$i<=count($scanCSS);$i++){
?>
    <a href="<?= "/CSS_Lesson/" . $scanCSS[$i] ?>"><?=$scanCSS[$i]?></a><br/>
<?  
}
?>
</div>