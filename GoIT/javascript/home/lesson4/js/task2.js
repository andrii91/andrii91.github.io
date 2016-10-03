function checkSpam (text) {
	if (typeof(text) == "string") {
		
		text = text.toUpperCase();
		indexSpam = text.indexOf("SPAM");
        indexSex = text.indexOf("SEX");
      
		if (indexSpam >= 0 || indexSex >= 0) {
			return true;
		}else{
			return false;
		}
	}
}
console.log(checkSpam("get new Sex videos"));
console.log(checkSpam("[SPAM] How to earn fast money?"));
console.log(checkSpam("New PSD template"));