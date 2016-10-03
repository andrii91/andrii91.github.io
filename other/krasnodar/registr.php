<?php 

$page = $_SERVER['HTTP_REFERER'];

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['mail']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
$message .= "Страница: .$page \n";

$to = "info@smmnow.ru" . ",";
$to .= "elenakh08091988@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("РЕГИСТРАЦИЯ Краснодар")."?=";


$status = mail($to, $subject, $message); 
header('Location: thanks.html');
?>