/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var impporte;
	var descuento1;
	impporte=document.getElementById('importe').value;
	descuento1= 0.25;
 	document.getElementById('resultado').value=parseInt(impporte)-parseInt(impporte*descuento1);
	
}
