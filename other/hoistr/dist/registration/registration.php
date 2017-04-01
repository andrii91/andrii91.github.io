<?php 

$page = $_SERVER['HTTP_REFERER'];

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "MESSAGE: {$_POST['message']} \n";
$message .= "Страница: .$page \n";

$to = "litvin.andriy91@gmail.com";

$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("РЕГИСТРАЦИЯ -")."?=";


$status = mail($to, $subject, $message); 

die(json_encode([
    'status' => 'success'
]));