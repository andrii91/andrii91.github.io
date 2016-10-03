//Факториал
function Factorial (x) {
	if (x!=1) {
		return x*Factorial(x-1);
	}else{
		return x;
	}
}
console.log(Factorial(5));