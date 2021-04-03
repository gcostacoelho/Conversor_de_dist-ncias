function converter(){
	var anoLuz = document.getElementById ('entrada').value
	var km = 9460536068.016
	var result1 = anoLuz * km
	document.getElementById ('saida').value = result1.toFixed(2)
}