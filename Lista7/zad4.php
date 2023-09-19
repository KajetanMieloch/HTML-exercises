<?php
$login="s339562";
$haslo="eeyie7Eebied";
$baza="s339562_lista7";
$con=mysqli_connect("localhost",$login,$haslo) or die("nie mogę połączyć z bazą");
function zad4(){
    global $con;
    global $baza;
    
    $res=mysqli_query($con,"use $baza");
    $res = mysqli_query($con, "SELECT * FROM products INNER JOIN productlines ON products.productLine = productlines.productLine limit 3");
    while($row=mysqli_fetch_assoc($res))
        $jsonTab[] = $row;
    $json = json_encode($jsonTab);
    echo $json;
}

zad4();

mysqli_close($con);  
?>


