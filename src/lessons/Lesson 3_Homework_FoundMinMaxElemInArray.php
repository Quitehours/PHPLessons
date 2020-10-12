<?php
$title = "Task min/max from Sketch";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";
/*Ваше задание — создать массив, наполнить его случайными значениями 
(можно использовать функцию rand), найти максимальное и минимальное значение массива и поменять их местами.
После каждого существенного изменения массива отображать его через var_dump*/

    if(isset($_GET['number'])){

    $arr = null;
    for($i=0;$i<$_GET['number'];$i++)
    {
        $arr[$i] = rand(0,100);
    }
    echo "<b>Random Array = </b>";
    echo var_dump($arr);

    $max = null;
    $min = null;
    $maxIndex = null;
    $minIndex = null;

    foreach($arr as $index => $value)
    {
        if($value > $max or $max === null)
        {
            $max = $value;
            $maxIndex = $index;
        }
        elseif($value < $min or $min === null)
        {
            $min = $value;
            $minIndex = $index;
        }
    }

    echo ("<br/>" . "<b>Max Value = </b>" . $max . "<b> Old Array Index = </b>" . $maxIndex . "<br/>" . "<b>Min Value = </b>" . $min . "<b> Old Array Index = </b>" . $minIndex);
//swap
function swapMaxMinArray($maxIndex, $minIndex, $arr)
{
    $temp = $arr[$maxIndex];
    $arr[$maxIndex] = $arr[$minIndex];
    $arr[$minIndex] = $temp;

    return $arr;
}
//swap
?>
<br/>
<b>Swap Array = </b>
<?php
echo var_dump(swapMaxMinArray($maxIndex, $minIndex, $arr));
?>
<br/>
<?php echo "<b>Max Value = </b>" . $max?> <b> New Index Swap Array Max = </b><?php echo  $minIndex ?><br/>
<?php echo "<b>Min Value = </b>" . $min?> <b> New Index Swap Array Min = </b><?php echo $maxIndex ?>
<? } else { ?>
<form>
    Enter number:
    <input type="number" name="number">
    <input type="submit" value="Debug">    
</form>
<? } ?>