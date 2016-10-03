//Fn = Fn-1 + Fn-2.

function fib (n) {
	if (n > 1) {
        n = fib(n-1) + fib(n-2);
		return(n);
	} else {
		return(n);
	}
}
console.log(fib(6));