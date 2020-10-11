<?php
$title = "Form Processing";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";
?>
    
 <!--<form action="/logic/backend.php">
    Name:
    <input type="text" name="name">
    Age
    <input type="number" name="age">
    <input type="submit" value="Go">
</form> 
-->
<!-- <form action="/logic/backend.php">
    Enter number:
    <input type="number" name="number">
    <input type="submit" value="Go">    
</form> -->
<!-- 
<form action="/logic/backend.php">
    Enter number:
    <input type="number" name="number">
    <input type="submit" value="Debug">    
</form> -->

<form action="../logic/backend.php" method="POST">
    <label>Name</label><br/>
    <input type="text" name="name" placeholder="Name"/><br/>
    <label>Email</label><br/>
    <input type="text" name="email" placeholder="Email"/><br/>
    <label>Massage:</label><br/>
    <textarea name="massage" cols="35" rows="15"></textarea>
    <br/>
    <input type="submit" name="done" value="Debug">
</form>