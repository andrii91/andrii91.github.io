<?php 

$page = $_SERVER['HTTP_REFERER'];

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
$message .= "Страница: .$page \n";

/* $to = "imarkschool@gmail.com" . ",";  
 $to = "Elenakh08091988@gmail.com" . ",";*/
$to .= "apavlenko@air.io";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Перезвоните мне!")."?=";


$status = mail($to, $subject, $message); 
die(json_encode([
    'status' => 'success'
]));
?>