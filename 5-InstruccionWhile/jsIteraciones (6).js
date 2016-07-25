function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var suma
		/*while(){
			;
			
			;
		} */
	while(true) {
		
				if (contador<6 && contador>0) {
					acumulador=prompt("ingrese numero");
				}
				suma=suma+ parseInt(acumulador);	
				contador=contador+1;
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN