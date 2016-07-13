function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random= Math.floor((Math.random() * 10) + 1);
if (random>8) {
	alert(random+", Excelente");
}	else if(random<4){
	alert(random+", vamos la proxima se puede");
} else {
	alert(random+", Aprobo");
}

}//FIN DE LA FUNCIÓN