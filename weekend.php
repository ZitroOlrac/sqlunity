<?php
    $dayofweek=date("l");
    if($dayofweek=="Saturday" || $dayofweek=="Sunday"){
        echo "It's the weekend!";
    } else if($dayofweek=="Friday") {
        echo "It's almost the weekend!";
    } else {
        echo "It's not the weekend.";
    }
?>