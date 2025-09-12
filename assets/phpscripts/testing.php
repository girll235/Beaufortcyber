<?php
    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'binamikasa61@gmail.com',
        From : "sabriine.bt@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );


?>