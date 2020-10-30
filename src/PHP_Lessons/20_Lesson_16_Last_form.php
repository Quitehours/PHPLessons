<?php
    session_start();
    if(isset($_POST["send"])){
        $from = htmlspecialchars ($_POST["from"]);
        $to = htmlspecialchars ($_POST["to"]);
        $subject = htmlspecialchars ($_POST["subject"]);
        $message = htmlspecialchars ($_POST["message"]);
        $_SESSION["from"] = $from;
        $_SESSION["to"] = $to;
        $_SESSION["subject"] = $subject;
        $_SESSION["message"] = $message;
        echo $from . $to . $subject . $message;
        $error_from = "";
        $error_to = "";
        $error_subject = "";
        $error_message = "";
        $error = false;
        if(($from == "") || (!preg_match("/@/", $from))){
            $error_from = "Enter correct email";
            $error=true;
        }
        if($to =="" || !preg_match("/@/", $from)){
            $error_to = "Enter corrcet email";
            $error=true;
        }
        if(strlen($subject)==0){
            $error_subject = "Enter theme";
            $error=true;
        }
        if(strlen($message)==0){
            $error_message = "Enter message";
            $error=true;
        }
        if(!$error){
            $subject = "=?utf-8?B?".base64_encode($subject)."?=";
            $headers = "From: $from \r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";
            mail($to, $subject, $message, $headers);
            header ("Location:Success.php");
            exit;
        }
        echo $error_from . $error_to . $error_subject . $error_message;
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Feedback</title>
    </head>
    <body>
        <h2>Form Feedback</h2>
        <form name="feedback" action="" method="POST">
            <label>From who:</label></br>
            <input type="text" name="from" value="<?=$_SESSION["from"]?>"/>
            </br><span style="color:red"><?$error_from?></span>
            <label>From to:</label></br>
            <input type="text" name="to" value="<?=$_SESSION["to"]?>">
            <span style="color:red"><?$error_to?></span></br>
            <label>Theme:</label></br>
            <input type="text" name="subject" value="<?=$_SESSION["subject"]?>"/>
            <span style="color:red"><?$error_subject?></span></br>
            <label>Message:</label></br>
            <textarea name="message" cols="30" rows="10"><?=$_SESSION["message"]?></textarea> 
            <span style="color:red"><?$error_message?></span></br>
            <input type="submit" name="send" value="Send "/>
    </body>
</html>