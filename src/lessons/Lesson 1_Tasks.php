<?php

// echo var_dump($_GET); //Выводит информацию о переменной

// echo "Здравствуй " . $_GET['name'] . '. Я так рад что тебе ' . $_GET['age'] . ' лет';
// if($_GET['age']>=18) {
//     echo "Здравствуй " . $_GET['name'] . '. Забирай свой ЦЫГАРКА, раз тебе ' . $_GET['age'] . ' лет';
// } else {
//     echo "Извини, но не судьба";
// }


// if(isset($_GET['name']) && $_GET['age']>=18) {
//     echo "Здравствуй " . $_GET['name'] . '. Забирай свой ЦЫГАРКА, раз тебе ' . $_GET['age'] . ' лет';
// } else {
//     echo "Извини, но не судьба";
// }

/*нужно разработать программу, которая считала бы сумму цифр числа введенного пользователем. 
Например: есть число 123, то программа должна вычислить сумму цифр 1, 2, 3, т. е. 6.*/ 
// $arrNum = str_split($_GET['number']);
// $avarage = array_sum($arrNum);
// echo 'Сумму равна = ' . $avarage;


/*Вам нужно разработать программу, которая считала бы количество 
вхождений какой-нибуть выбранной вами цифры в выбранном вами числе. 
// Например: цифра 5 в числе 442158755745 встречается 4 раза*/
// $arrNum = str_split($_GET['number']);
// $count=0;
// for($i=0;$i<=count($arrNum);$i++)
// {
// if($arrNum[$i]==5)
// {
// $count++;
// }
// }
// echo 'Число "5" повторяется в вашем примере - ' . $_GET['number'] . ' столько раз = ' . $count . ' раза.';    

