<?php
if(!isset($_GET['calc'])) { //Проверка имеет ли какое-то значение через isset - get(calc)
?>
<form>
    Enter numbers:                      
    <input type="number" name="num1">   <!--форма заполнение чисел через html -->
    <input type="number" name="num2">
    <input type="hidden" name="calc">
    <input type="submit" value="go">
</form>
<?
} else {
    $sum = $_GET['num1'] + $_GET['num2']; 
    echo 'Это сумма чисел = '.$sum;
}
?>
