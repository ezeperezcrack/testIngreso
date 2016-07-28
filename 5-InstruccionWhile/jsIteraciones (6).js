function Mostrar()
{
/*
	var contador=1;
	var acumulador=0;
	var suma=0;
		
		while(true) 
		{	
			
				if (contador<6 && contador>0) 
				{
					acumulador=prompt("ingrese numero");
					contador=contador+1;
					suma=parseInt(suma)+parseInt(acumulador);
				}	else 
					{
						document.getElementById('suma').value=suma;
						document.getElementById('promedio').value=suma/5;
						break;	
					}
			
		}
*/
	var contador=0;
	var acumulador=0;
	var valorIngresado;

	while(contador < 5)
	{
		valorIngresado = prompt("Ingrese un numero");
			while(isNaN(valorIngresado))
			{
				valorIngresado=prompt("Ingrese un numero, por favor");
			}
		acumulador += parseInt(valorIngresado);
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN