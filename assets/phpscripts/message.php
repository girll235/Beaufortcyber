<?php

    $to = "binamikasa61@gmail.com"; 
    $email = $_POST['email']; 
    $name = $_POST['name'];
    $subject1=$_POST['subject'];
    $message=$_POST['message'];
    $services = isset($_POST['services']) && !empty($_POST['services']) ? $_POST['services'] : 'None selected';

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $receiver = "helpdesk@beaufort.com";
            $subject = "Message from $name: $subject1";
            $body = "Subject: $subject1\nName $name\nEmail: $email\nSelected Services: $services\nmessage: $message";
            $sender = "From: $email";
            if(mail($receiver , $subject , $body , $sender)){
                echo "success";
            }else{
                echo "Sorry , failed to send your message";
            }
        }else{
            echo "Please enter a valid email address !";
        }

    }else{
        echo "Please fullfill the form !";
    }

?>