<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>CheckLog</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
        
            function success__fun (data) {
                // (data == "fail") : alert("Имя уже существует.") ? $("#information").text(data);
                if(data == "fail") {alert("Имя уже существует.");
                    $("#information").hide();}
                else {$("#information").text(data);}
                
            }

            function before__send () {
                $("#information").text(("Ожидание данных..."));
            }

            $("#done").bind("click", function () {
                $.ajax ({
                    url: "02_check.php",
                    type: "POST",
                    data: ({name: $("input#name").val()}),
                    dataType: "html",
                    beforeSend: before__send,
                    success: success__fun
                });
            });
        });
    </script>
</head>
<body>
    <input type="text" id="name" placeholder="Введите имя"/>
    <input type="button" id="done" value="Готово"/>
    <div id="information"></div>
</body>
</html>
