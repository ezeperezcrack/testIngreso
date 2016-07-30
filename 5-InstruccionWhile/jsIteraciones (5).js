function Mostrar()
{

var sexo=prompt("ingrese su sexo F ó M");

	while(sexo!="F" && sexo!="M" && sexo!="f" && sexo!="m")
	{
		sexo=prompt("ingrese su sexo F ó M");
		
	}
	document.getElementById('Sexo').value= sexo;
	}//FIN DE LA FUNCIÓN