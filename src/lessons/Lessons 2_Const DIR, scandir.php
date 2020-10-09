<?php
const DIR = 'lessons';
$scan = scandir(DIR);
?>

<?php
for($i=2;$i<10;$i++)
{
?>

<a href="<?= "/lessons/" . $scan[$i] ?>"><?= $scan[$i] ?></a><br/>

<?  
}
?>