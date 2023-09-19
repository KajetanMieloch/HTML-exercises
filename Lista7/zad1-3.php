<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="ajax.js"></script> 
</head>
<style>
    table, th, td {
  border:1px solid black;
}
</style>
<body>
<?php
$login="s339562";
$haslo="eeyie7Eebied";
$baza="s339562_lista7";
$con=mysqli_connect("localhost",$login,$haslo) or die("nie mogę połączyć z bazą");
//zad1
    $res=mysqli_query($con,"use $baza");
    $res=mysqli_query($con,"show tables");
    echo "<ul>";
    while($row=mysqli_fetch_row($res))
        echo "<li>". join(" ",$row) ."</li>";

    echo "</ul>";

function zad2() {
    global $con;


    $res=mysqli_query($con,"use $baza");
    $res=mysqli_query($con,"SELECT * FROM products INNER JOIN productlines ON products.productLine = productlines.productLine");
    echo "<ul>";
    while($row=mysqli_fetch_row($res))
        echo "<li>". join(" ",$row) ."</li>";
    
    echo "</ul>";
    
}

function zad3(){
    global $con;

    $res=mysqli_query($con,"use $baza");
    $res=mysqli_query($con,"SELECT * FROM products INNER JOIN productlines ON products.productLine = productlines.productLine");
    echo "<table>";
    while($row=mysqli_fetch_row($res))
        echo "<tr><td>". join("</td><td>",$row) ."</td></tr>";
    echo "</table>";

}


zad2();

zad3();

mysqli_close($con);  
?> 
</body>
</html>


