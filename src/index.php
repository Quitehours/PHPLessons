<!DOCTYPE html>
<html>
    <head>
        <meta  http-equiv="Content-Type" content ="text/html; charset=utf-8"/>
        <link rel="stylesheet" type="text/css" href="homepage.css"/>
        <title>Mini project</title>
    </head>
    <body>
        <header>
            <h1><div>Website Development</div></h1>
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

        <div id="JS"><h1><a href="https://ru.wikipedia.org/wiki/JavaScript" title="JavaScript">JS</a></h1></div>
        <div id="NodeJS"><h1><a href="https://ru.wikipedia.org/wiki/Node.js" title="Node JS">Node JS</a></h1></div>
        <div id="JQuery"><h1><a href="https://ru.wikipedia.org/wiki/JQuery" title="JQuery">JQuery</a></h1></div>
        <div id="AJAX"><h1><a href="https://ru.wikipedia.org/wiki/AJAX" title="Empty">AJAX</a></h1></div>
        
        <div id="MyAchievementsInMyJS"><p>My achievements in JS</p>
            <?php
                const JSDIR = 'JavaScript_Lesson';
                $scanJS = scandir(JSDIR);
                for($i=2;$i<=count($scanJS);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/JavaScript_Lesson/" . $scanJS[$i] ?>"><?= $scanJS[$i] ?></a></p>
            <?  
                }
            ?>
        </div>

        <div id="MyAchievementsInMyNodeJS"><p>My achievements in Node JS</p>
            <?php
                const NodeJSDIR = 'node';
                $scanNodeJS = scandir(NodeJSDIR);
                for($i=2;$i<=count($scanNodeJS);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/node/" . $scanNodeJS[$i] ?>"><?= $scanNodeJS[$i] ?></a></p>
            <?  
                }
            ?>
        </div>

        <div id="MyJQuery"><p>My achievements in JQuery</p>
            <?php
                const JQuery = 'JQuery_Lesson';
                $scanJQuery = scandir(JQuery);
                for($i=2;$i<=count($scanJQuery);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/JQuery_Lesson/" . $scanJQuery[$i] ?>"><?= $scanJQuery[$i] ?></a></p>
            <?  
                }
            ?>
        </div>

        <div id="MyAJAX"><p>My achievements in AJAX</p>
            <?php
                const AJAX_Lessons = 'AJAX_Lessons';
                $scanAJAX_Lessons = scandir(AJAX_Lessons);
                for($i=2;$i<=count($scanAJAX_Lessons);$i++ ){
            ?>
                <p class="textTable"><a href="<?= "/AJAX_Lessons/" . $scanAJAX_Lessons[$i] ?>"><?= $scanAJAX_Lessons[$i] ?></a></p>
            <?  
                }
            ?>
        </div>
        <footer>
            ,
        </footer>        
    </body>
</html>