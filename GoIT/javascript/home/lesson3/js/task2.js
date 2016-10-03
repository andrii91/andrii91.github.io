function primeNumbers (a, b) {
cycle: 	for (var i = a; i < b; i++) {
			for (var j = 2; j < i; j++) {
				if (i%j===0) {
					continue cycle;
				}
			}
			console.log(i);
		}
}
primeNumbers(2,10);