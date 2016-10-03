<?php 

$page = $_SERVER['HTTP_REFERER'];

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
$message .= "Subject: {$_POST['subject']} \n";
$message .= "city: {$_POST['city']} \n";
$message .= "message: {$_POST['message']} \n";
$message .= "Страница: .$page \n";

$to = "arithletics@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("ЗАЯВКА ARITHLETICS ENG")."?=";


$status = mail($to, $subject, $message); 

die(json_encode([
    'status' => 'success'
]));
?>