<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Format JSON</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            //bind("change",function) - будет выполняться при изменение значения
            $("select[name='country']").bind("change", function() {
                //это не аджакс запрос, а get запрос
                //$.get("параметр который будем проверять", "{переменные, который мы будем передавать, функция которая срабаьывает при успешном возвращении данных}"
                $.get("03_countryCheck.php", {country: $("select[name='country']").val()}, function(data) {
                    //отправляем с помощью php запрос, а возвращается в формате json и мы его раскодируем
                    data = JSON.parse(data);
                    
                        //Отчищает поле, после выбора пользователя, если вдруг он захочет их поменять
                    $("select[name='city']").empty();

                    //перебираем массив
                    for(let id in data) {
                        
                        // console.log(id)
                        $('#city').append(`<option value="${id}">${data[id]}</option>`)
                    }
                });

            });
        });


    </script>
</head>
<body>
    <label>Укажите страну:</label>
    <select name="country">
        <option value="0" selected="selected"></option>
        <option value="1">Америка</option>
        <option value="2">Франция</option>
    </select>
    
    <label>Города:</label>
    <select id="city" name="city">
        <option value="0" ></option>
    </select>
</body>
</html>