function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var suma=0;
		/*while(){
			;
			
			;
		} */
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


}//FIN DE LA FUNCIÓN