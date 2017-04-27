<?php
define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', 'z');
define('MYSQL_DB', 'letsads_sms');


function db_connect() {

	$link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB);

	mysqli_query($link, 'SET NAMES "utf8"');
	mysqli_query($link, "SET CHARACTER SET 'utf8'");
	mysqli_query($link, "SET SESSION collation_connection = 'utf8_general_ci'");

	if (!$link) {
	    die('Ошибка подключения (' . mysqli_connect_errno() . ') '
	            . mysqli_connect_error());
	}

	// echo 'Соединение установлено... ' . mysqli_get_host_info($link) . "\n";

	return $link;
}

?>