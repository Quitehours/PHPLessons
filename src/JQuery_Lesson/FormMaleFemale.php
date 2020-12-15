<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <script type = "text/javascript">

        function valid() {

            
            //проверка поставлена-ли калочка
            var state = $("input[name='sex']:checked").val();
            $("#message").show();
            if(!state) {

                return $("#message").html("<font style='color:red'></font>Укажите ваш пол<br/>");
                //hide - спрятать show - показать
                $("#message").hide()
            }

            alert(state);

            if(state == "male") {

                $("#img").show();

            }
            //нахождение елементов в коде
            var test = $("div, p");

        }

    </script>
</head>
<body>
    <form name="form" id="form">
        <label for="female">Женский</label>
        <input type="radio" id="female" name="sex" value="female"/>
        <label for="male">Мужской</label>
        <input type="radio" id="male" name="sex" value="male"/>
        <br/> <br/>
        <span id="message"></span>
        <input type="button" id="done" onclick="return valid()" value="Готово"/>
    </form>

    <img src="1.jpg" style="display:none" id="img">

</body>
</html>