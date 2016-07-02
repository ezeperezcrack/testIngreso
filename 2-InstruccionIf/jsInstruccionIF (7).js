function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
var estado=document.getElementById('estadoCivil').value;
if (edad < 18 && estado!='Soltero'){//probe doble = y tambien funciono
	alert("es muy pequeño para NO ser soltero");
} 
	


}//FIN DE LA FUNCIÓN