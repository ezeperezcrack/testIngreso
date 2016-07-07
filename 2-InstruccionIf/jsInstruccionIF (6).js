function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value;
	/*if(edad>=13 && edad<=17){
		alert("ud es adolescente");
} else if (edad<13 && edad >0){
		alert("ud es un niño");
} else	{	alert("ud es mayor");
}
*/
if (edad<13) {
	alert("es menor");
} else {
	if(edad>17) {
		alert("es mayor");
	} else{
		alert("es adolescente");
	}
}//otra forma de hacerlo
}//FIN DE LA FUNCIÓN