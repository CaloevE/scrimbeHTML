function squareDigits(num){
	return num.toString().split('').map(function (val) {
		return val * val
	}).join('')
}