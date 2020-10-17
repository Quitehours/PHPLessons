<!DOCTYPE html>
<html>
    <head>
        <meta  http-equiv="Content-Type" content ="text/html; charset=utf-8"/>
        <link rel="stylesheet" type="text/css" href="homepage.css"/>
        <title>Mini project</title>
    </head>
    <body>
        <header>
            <h1>Website Development</h1>
        </header>
        <div id="HTML"><h1><a href="https://ru.wikipedia.org/wiki/HTML" title="HyperText Markup Language">HTML</a></h1></div>
        <div id="CSS"><h1><a href="https://ru.wikipedia.org/wiki/CSS" title="Cascading Style Sheets">CSS</a></h1></div>
        <div id="PHP"><h1><a href="https://ru.wikipedia.org/wiki/PHP" title="Hypertext Preprocessor">PHP</a></h1></div>
        <div id="MySQL"><h1><a href="https://ru.wikipedia.org/wiki/MySQL" title="Database">MySQL</a></h1></div>
        <div id="MyAchievementsInHTML"><p>My achievements in HTML</p>
            <?php
                const HTMLDIR = 'HTML_Lesson';
                $scanHTML = scandir(HTMLDIR);
                for ($i=2;$i<=count($scanHTML);$i++){
            ?>
                <p class="textTable"><a href="<?= "/HTML_Lesson/" . $scanHTML[$i] ?>"><?=$scanHTML[$i]?></a></p>
            <?  
                }
            ?>
        </div>
        <div id="MyAchievementsInCSS"><p>My achievements in CSS</p>
            <?php
                const CSSDIR = 'CSS_Lesson';
                $scanCSS = scandir(CSSDIR);
                for ($i=2;$i<=count($scanCSS);$i++){
            ?>
                <p class="textTable"><a href="<?= "/CSS_Lesson/" . $scanCSS[$i] ?>"><?=$scanCSS[$i]?></a></p>
            <?  
                }
            ?>
        </div>
        <div id="MyAchievementsInPHP"><p>My achievements in PHP</p>
            <?php
                const DIR = 'PHP_Lessons';
                $scan = scandir(DIR);
                for($i=2;$i<=count($scan);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/PHP_Lessons/" . $scan[$i] ?>"><?= $scan[$i] ?></a></p>
            <?  
                }
            ?>
        </div>
        <div id="MyAchievementsInMySQL"><p>My achievements in MySQL</p>
            <?php
                const MySQLDIR = 'MySQL_Lesson';
                $scanMySQL = scandir(MySQLDIR);
                for($i=2;$i<=count($scanMySQL);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/MySQL_Lesson/" . $scanMySQL[$i] ?>"><?= $scanMySQL[$i] ?></a></p>
            <?  
                }
            ?>
        </div>
        <footer><p>footer</p></footer>        
    </body>
</html>