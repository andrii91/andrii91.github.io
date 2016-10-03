for (var i = 1; i <= 100; i++) {
	if (i%3===0 && i%5===0){
		i = i + 'FizzBuzz';
	}
	console.log(i);     
    i = parseInt(i);
}