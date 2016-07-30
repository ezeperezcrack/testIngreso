function Mostrar()
{

	var contador=0;
	var acumulador;
	var respuesta="si";
	var suma=0;

	/*while(true) 
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
		}*/
	
	while(respuesta == "si") 
	{
		acumulador=prompt("ingrese numero");
		acumulador=parseInt(acumulador);
			while(isNaN(acumulador)&& acumulador>0)
			{
			contador=contador+1;
			suma=parseInt(suma)+parseInt(acumulador);
			respuesta=prompt("Quiere seguir ingresando? Responda si o no");
			} 
	}
document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN