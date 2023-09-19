<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Zadanie 3</title>
</head>
<body>
    <?php
    function dodaj($a, $b) {
        $wynik = $a + $b;
        return "<p>{$wynik}</p>";
    }
    
    function odwTab($a) {
        $reverse=array_reverse($a);
        print_r($reverse);
    }    

    
    echo(dodaj(10, 10));
    echo "<br>";
    odwTab(array("EZN","UWr"));
    echo "<br>";
    


    ?>
</body>
</html>