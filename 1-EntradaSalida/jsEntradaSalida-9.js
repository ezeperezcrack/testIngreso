/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var suelddo;
var aumento1;
	suelddo=document.getElementById('sueldo').value;
	aumento1= 0.1;
 	document.getElementById('resultado').value=parseInt(suelddo)+parseInt(suelddo*aumento1);
	
}
