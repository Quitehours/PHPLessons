<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        function funcBefore () {

            $("#information").text("Ожидание данных...");
        }

        function funcSuccess (data) {
            
            $("#information").text(data);
        }

        $(document).ready(function() {
            $("#load").bind("click", function() {
            
            var admin = "Admin";    
                //В этом методе выполняется отправка данных/получение данных
                //16 параметров - 
                $.ajax ({
                
                    url: "01_content.php",// - на какую страницу будем отправлять данные
                    type: "POST",// - каким образом будем отправлять данные (post/get)
                    data: ({name: admin, number: 5}),// -передача переменных (к примеру проверка логина: отправка на content.php логина
                        //если логин занят, то вернется ответ)
                    dataType: "html", // - тут указывается вид данных, который был передан в предыдущем параметре
                    beforeSend: funcBefore,// - параметр будет срабатывать, если еще не пришел ответ с content.php
                        //в нем выполняется функция, пока документ загружается
                    success: funcSuccess // - параметр выполняется при успешном завершение отправки и возврата запроса
                })
            });
        });
    </script>
</head>
<body>
    <p id="load" style="cursor:pointer">Upload data</p>
    <div id="information"></div>
</body>
</html>