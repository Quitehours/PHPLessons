<?php
if(isset($_POST["done"])){
    if($_POST["name"] == ""){
    echo "Enter your name. <a href='/'>Edited</a>";
    }
    else{
        //header("Location:index.php");
        print_r ($_POST);
    }
}

?>