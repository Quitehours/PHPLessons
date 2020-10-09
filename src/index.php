<?php
const DIR = 'lessons';
$scan = scandir(DIR);

?>

<?php
for($i=2;$i<=count($scan);$i++ )
{
    if($i == 7){
        continue;
    }
?>

<a href="<?= "/lessons/" . $scan[$i] ?>"><?= $scan[$i] ?></a><br/>

<?  
}
?>