<?php 

function getVar($name)
{
	return isset($_POST[$name]) ? trim($_POST[$name]) : null;
}

$data=array(
	'type'     => getVar('type'),
	'name' => getVar('name'),
	'phone' => getVar('phone'),
	'email' => getVar('email'),
	'message'     => getVar('message'),
	'page'     => $_SERVER['HTTP_REFERER']
);

/*$to = implode(",", [
	"veka.online.krasnodar@gmail.com",
	"zakaz@oknaveka24.ru",
]);*/
$to = 'litvin.andriy91@gmail.com';

$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка")."?=";


array_walk($data, function(&$val, $key) {
	$val = "$key: $val";
});

$message = implode("\r\n", $data);

$status = mail($to, $subject, $message); 
die(json_encode([
    'status' => 'success'
]));