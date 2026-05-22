<?php
    header("Access-Control-Allow-Origin: *");
    $sum=15;
    if($sum>10){
        echo "The number is greater than 10";
    } else {
        echo "The number is not greater than 10";
    }
?>