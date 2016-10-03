<?php 

$message = "Регистрация со следующими данными: \n";
$message .= "Имя: {$_POST['firstname']} \n";
$message .= "Фамилия: {$_POST['lastname']} \n";
$message .= "Город: {$_POST['city']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "Вид фото: {$_POST['view_photo']} \n";

$to = "al@gogmat.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка на регистрацию")."?=";


$status = mail($to, $subject, $message); 

die(json_encode([
	'status' => 'success'
]));
?>