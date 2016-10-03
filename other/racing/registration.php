
<?php 

$message = "Регистрация Show of Masters: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "Телефон: {$_POST['phone']} \n";
// $message .= "Skype: {$_POST['skype']} \n";

// $to = "sasha@readytorace.ru";
$to = "cardesign.k@yandex.ru";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка на регистрацию")."?=";


$status = mail($to, $subject, $message); 
header('Location: /thanks.html');
/*die(json_encode([
	'status' => 'success'
]));
*/
?>