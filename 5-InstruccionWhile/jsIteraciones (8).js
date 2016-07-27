//Enunciado: Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
function Mostrar()
{
	var numero=0;
	var positivo=0;
	var negativo=1;
	var respuesta;

	while(true) 
		{	

			
				if (respuesta != "no") 
				{
					numero=prompt("ingrese numero positivo o negativo");		
					if (numero>0) 
					{
						positivo=parseInt(positivo)+parseInt(numero);		
					}	else 
						{
							negativo= negativo * numero;
						}
				} else 
					{
						document.getElementById('suma').value=positivo;
						document.getElementById('producto').value=negativo;						
						break;
					}

			respuesta=prompt("Quiere seguir ingresando? Responda si o no");		
		}





}//FIN DE LA FUNCIÓN