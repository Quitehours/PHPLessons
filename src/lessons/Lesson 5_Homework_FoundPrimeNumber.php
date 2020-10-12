<?php
$title = "Found Prime Number";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";

$str = "";
$numUser = 10;

echo "User input = $numUser;<br/>" . "Number - <b>$numUser</b> is an " . IsFoundPrimeNumber($numUser, $str);

function IsFoundPrimeNumber($numUser, $str){
    for ($i=2; $i < $numUser; $i++) {
        for ($j=2; $j < $numUser ; $j++) {
            $multiply=$i*$j;
            if($numUser==$multiply){
                $str="<b>Not Prime</b>";
                $i = $numUser;
                $j = $numUser;
            }
            else{
                $str="<b>Prime</b>";
            }
        }
    }
    return $str;
}
?>