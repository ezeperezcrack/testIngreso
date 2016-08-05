function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var negativo=0;
	var positivo=0;
	var contPo=0;
	var contNe=0;
	var contCe=0;
	var contPa=0;
	var acumulador;
	var respuesta="si";
		
		while (respuesta=="si")
				{
					contador++;
					acumulador=prompt("ingrese numero");
					while(isNaN(acumulador))
					{
						acumulador=prompt("ingrese numero, por favor");
						
					}
					if (acumulador<0) 
					{
						negativo= parseInt(negativo) + parseInt(acumulador);
						contNe++;
					}	
					if (acumulador>0) 				
					{
						positivo= parseInt(positivo) + parseInt(acumulador);
						contPo++;
					}
					if (acumulador==0) 
					{
						contCe++;
					}
					if (acumulador%2 == 0 && acumulador!=0) 
					{
						contPa++;
					}
				
				respuesta=prompt("quiere seguir ingresando numeros? (si o no)");
				}

	document.write("<p>1-Suma de los negativos es </p>" +negativo, "<p>2-Suma de los positivos es </p>" +positivo, "<p>3-Cantidad de positivos es </p>" +contPo, "<p>4-Cantidad de negativos es </p>" +contNe, "<p>5-Cantidad de ceros es </p>" +contCe, "<p>6-Cantidad de números pares es </p>" +contPa, "<p>7-Promedio de positivos es </p>" +positivo/contPo , "<p>8-Promedios de negativos es </p>" +negativo/contNe , "<p>9-Diferencia entre positivos y negativos es </p>" + (parseInt(positivo)+parseInt(negativo)));
	




}//FIN DE LA FUNCIÓN