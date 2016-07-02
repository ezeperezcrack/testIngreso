function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
var estado=document.getElementById('estadoCivil').value;
if (edad >=18 && estado=='Soltero'){//funciono con doble == equal to
	alert("es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN