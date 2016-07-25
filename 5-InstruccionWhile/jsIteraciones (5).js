function Mostrar()
{

var sexo
	while(true)
	{
		sexo=prompt("ingrese su sexo F ó M");
			if (sexo=="F" || sexo=="M" || sexo=="f" || sexo=="m") 
			{
				document.getElementById('Sexo').value= sexo;
				break;
			}	else 
				{
					alert("no ingreso un sexo valido");
				}
	}
	}//FIN DE LA FUNCIÓN