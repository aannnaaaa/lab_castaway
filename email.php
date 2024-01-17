<?php
    if(isset($_POST['send'])){
        if(!empty($_POST['name']) && !empty($_POST['email']) ){
            $name =$_POST['name'];
            $theme="Subscription";
            $msg="Thanks for subscribe";
            $email = $_POST['email'];
            $header ="From: noreply@example.com"."\r\n";
            $header.="Reply-To: noreply@example.com"."\r\n";
            $header.="X-Mailer: PHP/".phpversion();
            $mail = @mail($email,$theme,$msg,$header);
            echo "<p style='position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-family: Arial, sans-serif; font-size: 30px;'>Thank you for subsribing, $name!</p>";
            echo "<p style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-family: Arial, sans-serif; font-size: 30px;'>The email was successfully sent to the email account $email.</p>";
            echo "<p style='position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-family: Arial, sans-serif; font-size: 30px;'>You can go back to the previous page. <a href='index.php'>Go back</a></p>";
            
        }
    }
    
?>
<link rel="stylesheet" href="./style.css">