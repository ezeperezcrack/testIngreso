function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value;
	if(edad>=13 && edad<=17){
		alert("ud es adolescente");
} else if (edad<13){
		alert("ud es un niño");
} else	{	alert("ud es mayor");
}

}//FIN DE LA FUNCIÓN