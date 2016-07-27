function Mostrar()
{

	var contador=0;
	var contUno=0;
	var contDos=0;
	// declarar variables
	
	var respuesta;

		while(true) 
		{	
				if (respuesta != "no") 
				{
					contador=prompt("ingrese numero");
					if (contador>contUno) 
					{
						contUno=contador;
					}	else 
						{
							contDos=contador;
						}
				}	else 
					{
						document.getElementById('maximo').value=contUno;
						document.getElementById('minimo').value=contDos;
						break;	
					}
			respuesta=prompt("Quiere seguir ingresando? Responda si o no");		
		}




}//FIN DE LA FUNCIÓN