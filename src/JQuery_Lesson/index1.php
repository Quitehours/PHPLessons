<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    пропадет блок по нажатию на него
    <div id="test"  onclick="$('#test').hide()">Test</div> 


    <div class="test1"  onclick="$('#test').hide()">Test</div>
    <div class="test1"  onclick="$('#test').hide()">Test</div>
    <div class="test1"  onclick="$('#test').hide()">Test</div>
    <p class="test1"  onclick="$('#test').hide()">Test</p>
    <script type="text/javascript">
    var test = $('#test').html();
    alert(test);

    
    var test1=$('div.test1');
    for (let i = 0; i < test1.length; i++) {
        //аналог test[i]
        test1.get(i).style.color = "red";
        
    }

    setTimeout("$('p.test1').get(0).style.color = 'green'", 2000);
    </script>
</body>
</html>