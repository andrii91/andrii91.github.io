
<?php 

$message = "Заказали звонок: \n";
// $message .= "Имя: {$_POST['name']} \n";
// $message .= "Email: {$_POST['email']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
// $message .= "Skype: {$_POST['skype']} \n";

$to = "tiukinfo@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка на регистрацию")."?=";


$status = mail($to, $subject, $message); 
header('Location: /thanks.html');
?>