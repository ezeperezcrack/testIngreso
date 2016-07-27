function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var suma=0;

	while(true) 
		{	

			
				if (respuesta != "no") 
				{
					acumulador=prompt("ingrese numero");
					contador=contador+1;
					suma=parseInt(suma)+parseInt(acumulador);
				}	else 
					{
						document.getElementById('suma').value=suma;
						document.getElementById('promedio').value=suma/contador;
						break;	
					}
			respuesta=prompt("Quiere seguir ingresando? Responda si o no");		
		}


}//FIN DE LA FUNCIÓN