<?php
function IsDetMatrix3x3 ($arrayMatrix){
    $firstSum = $arrayMatrix[0][0] * $arrayMatrix[1][1] * $arrayMatrix[2][2];
    $secondSum = $arrayMatrix[2][0] * $arrayMatrix[0][1] * $arrayMatrix[1][2];
    $thirtySum = $arrayMatrix[1][0] * $arrayMatrix[0][2] * $arrayMatrix[2][1];
    $firstSub = $arrayMatrix[2][0] * $arrayMatrix[1][1] * $arrayMatrix[0][2];
    $secondSub = $arrayMatrix[1][0] * $arrayMatrix[0][1] * $arrayMatrix[2][2];
    $thirtySub = $arrayMatrix[0][0] * $arrayMatrix[1][2] * $arrayMatrix[2][1];
    $detA = $firstSum + $secondSum + $thirtySum - $firstSub - $secondSub - $thirtySub;
    echo $detA . "<br/><br/><br/><br/>";
}
function IsDetMetrix4x4(){
    
}

$arrayMatrix = [[9,9,9],
                [4,1,1],
                [2,3,1]];//array(4, array(3));

IsDetMatrix3x3($arrayMatrix);

for ($row=0; $row <3; $row++ ) {
    for ($col=0; $col < 3; $col++) { 
        //$array[$i][$j]=rand(0,1);
        echo $arrayMatrix[$row][$col];
        echo '  ';     
    }
    echo "<br/>";
}
$arrayCloneMatrix = [[1,2],
                    [4,5],
                    [7,8]];
$descriminant = $arrayMatrix[0][0]*$arrayMatrix[1][1]*$arrayMatrix[2][2]+$arrayMatrix[0][0]
?>
