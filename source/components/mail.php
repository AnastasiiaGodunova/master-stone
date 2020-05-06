<?php

$receiver = 'icq95@mail.ru';

if($_SERVER['REQUEST_METHOD'] == 'post'){
	$name = $_POST['name'];
	$phone = $_POST['tel'];

	if(mail($receiver, 'Callback for you', "You have new callback request:\r\nName: ".$name."\r\nPhone: ".$phone)){
		echo "MESSAGE SENT";
	}else{
		echo "ERROR";
	}
}

?>
