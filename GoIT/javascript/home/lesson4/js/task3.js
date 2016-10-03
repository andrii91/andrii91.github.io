function anEllipsis (text) {
	if (text.length >= 20) {
		return text.substring(0, 21) + "...";
	}else {
		return text;
	}
}

console.log(anEllipsis("get new Sex videos"));
console.log(anEllipsis("[SPAM] How to earn fast money?"));
console.log(anEllipsis("New PSD template"));