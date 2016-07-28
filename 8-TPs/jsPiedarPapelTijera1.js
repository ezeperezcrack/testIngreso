/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;


function comenzar()
{
	eleccionMaquina= Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{
	
	while(eleccionMaquina>0 && eleccionMaquina<4)
	{
		switch (eleccionMaquina) 
		{
			case "1":
			alert("La maquina eligio piedra, has empatado");
			break;
			case "2":
			alert("La maquina eligio papel, has perdido");
			break;
			case "3":
			alert("La maquina eligio tijera, has ganado!!");
			break;
		}
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	
	while(eleccionMaquina>0 && eleccionMaquina<4)
	{
		switch (eleccionMaquina) 
		{
			case "1":
			alert("La maquina eligio piedra, has ganado!!");
			break;
			case "2":
			alert("La maquina eligio papel, has empatado");
			break;
			case "3":
			alert("La maquina eligio tijera, has perdido");
			break;
		}
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	
	while(eleccionMaquina>0 && eleccionMaquina<4)
	{
		switch (eleccionMaquina) 
		{
			case "1":
			alert("La maquina eligio piedra, has perdido");
			break;
			case "2":
			alert("La maquina eligio papel, has ganado!!");
			break;
			case "3":
			alert("La maquina eligio tijera, has empatado");
			break;
		}
	}

}//FIN DE LA FUNCIÓN