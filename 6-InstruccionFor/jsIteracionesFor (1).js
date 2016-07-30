function Mostrar()
{
	var contador=0;
	var random;
	var contador1=0;
	var contador10=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var limite=100000;
	for ( ;contador<=limite; )
	{
		
		//console.log(contador);
		contador++;
			
		random = Math.floor((Math.random() * 10) + 1);
		while (random==5 && (contador5)>(limite*0.05))
		{
			random = Math.floor((Math.random() * 10) + 1);
			
		}
			switch(random)
			{
				case 1:
				contador1++;
				break;
				case 2:
				contador2++;
				break;
				case 3:
				contador3++;
				break;
				case 4:
				contador4++;
				break;
				case 5:
				contador5++;
				break;
				case 6:
				contador6++;
				break;
				case 7:
				contador7++;
				break;
				case 8:
				contador8++;
				break;
				case 9:
				contador9++;
				break;
				case 10:
				contador10++;
				break;
			}
		
		

	}
	console.log("numero uno: " + Math.floor(contador1*100/limite) +"%");
		console.log("numero dos: " + Math.floor(contador2*100/limite)+"%");
		console.log("numero tres: " + Math.floor(contador3*100/limite)+"%");
		console.log("numero cuatro: " + Math.floor(contador4*100/limite)+"%");
		console.log("numero cinco: " + Math.floor(contador5*100/limite)+"%");
		console.log("numero seis: " + Math.floor(contador6*100/limite)+"%");
		console.log("numero siete: " + Math.floor(contador7*100/limite)+"%");
		console.log("numero ocho: " + Math.floor(contador8*100/limite)+"%");
		console.log("numero nueve: " + Math.floor(contador9*100/limite)+"%");
		console.log("numero diez: " + Math.floor(contador10*100/limite) +"%");
}