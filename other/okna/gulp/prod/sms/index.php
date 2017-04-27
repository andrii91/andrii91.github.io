<?php
  function generate_code($length = 12){
      $code = '';
      $symbols = '0123456789abcdefghijklmnopqrstuvwxyz';
      for( $i = 0; $i < (int)$length; $i++ ) {
          $num = rand(1, strlen($symbols));
          $code .= substr( $symbols, $num, 1 );   
      }               
      return $code;
  }
  $data=array(
    'type'     => 'СМС-СКИДКА',
    'phone'    => $_REQUEST['phone'],
    'ip'       => $_SERVER["REMOTE_ADDR"],
    'sms_code' => generate_code()
  );

  
  require_once 'db.php';


  $link = db_connect();
  $query = "SELECT * from sms WHERE (phone= '".$data['phone']."' OR ip= '".$data['ip']."') ";
  $result = mysqli_query($link, $query);
  $row = mysqli_fetch_assoc($result);

  if ($row == null) {
    $ApiUrl  = 'http://letsads.com/api';
    $XML='<?xml version="1.0" encoding="UTF-8"?><request> <auth>
        <login>380989969999</login>
        <password>147258</password>
     
        </auth><message>
            <from>Okna-online</from>
            <text>Ваш код на скидку '.$data['sms_code'].'.</text>
            <recipient>'.$data['phone'].'</recipient>
        </message>
        </request>';
     
    $rCurl = curl_init($ApiUrl);
    curl_setopt($rCurl, CURLOPT_HEADER, 0);
    curl_setopt($rCurl, CURLOPT_POSTFIELDS, $XML);
    curl_setopt($rCurl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($rCurl, CURLOPT_POST, 1);
    $Answer = curl_exec($rCurl);
    curl_close($rCurl);

    $query = "INSERT INTO 
            `sms`(
                  `phone`,
                  `sms_code`,
                  `ip`
                  ) 
            VALUES(
                  '".$data['phone']."',
                  '".$data['sms_code']."',
                  '".$data['ip']."')";

    $result = mysqli_query($link, $query);

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
  } else {
     die(json_encode([
        'status' => 'error'
    ]));
  }


?>