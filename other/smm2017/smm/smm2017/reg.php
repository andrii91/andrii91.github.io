<?php 

$page = $_SERVER['HTTP_REFERER'];

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['mail']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
$message .= "Вариант участия: {$_POST['participation']} \n";
$message .= "Вариант: {$_POST['options']} \n";
$message .= "Коментарий или вопрос: {$_POST['comment']} \n";
$message .= "Страница: .$page \n";

 $to = " imarkschool@gmail.com" . ",";  
 // $to = "Elenakh08091988@gmail.com" . ",";
$to .= "pavlenkojr@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("ЗАЯВКА #SMM2017-")."?=";


$status = mail($to, $subject, $message); 
header('Location: ../smm2017-thx/');
?>