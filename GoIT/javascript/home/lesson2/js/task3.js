var login, password;
login = prompt('Ваш логин', '');
if (login == 'admin') {
	password = prompt('Ваш пароль', '');
	if (password == 'passw0rd') {
		alert('Welcome home!');

	} else if(password == null){
		alert('Canceled');
	}else{
		alert('Wrong password');
	};
} else {
	alert('Access denied')		
};