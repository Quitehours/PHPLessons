<?php
$title = "Sending massage to email";
include_once "../header.php"; //подключает файл 
include_once "../footer.php";

$massage = "Это самое простое сообщение в мире";
$to = "dimka.ept@gmail.com";
$from = "dimka.ept@gmail.com";
$subject = "Тема сообщения";
$subject = "=?utf-87B?".base64_endcode($subject)."?=";
$headers = "From $from\r\nReply-to: $from\t\nContent-type: text/plain; charset=utf-8\r\n";

mail ($to, $subject,$massage, $headers);  
?>