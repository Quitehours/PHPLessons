<?php
$str;
$numUser = 10;
for ($i=2; $i < $numUser; $i++) {
    for ($j=2; $j < $numUser ; $j++) {
        $multiply=$i*$j;
        if($numUser==$multiply){
            $str="<b>NotPrime</b>";
            $i = $numUser;
            $j = $numUser;
        }
        else{
            $str="<b>Prime</b>";
        }
    }
}
echo "User input = $numUser;<br/>" . "Number - <b>$numUser</b> is an $str;";
?>