function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value;
/*	if(edad>=13 && edad<=17){
		alert("ud es adolescente");
} DOS formas de hacerlo */
if (edad>12) {
	if (edad<18) {
		alert("ud es adolescente");
	}
} 

}//FIN DE LA FUNCIÓN