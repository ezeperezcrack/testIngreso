function Mostrar()
{
	var varN = 1;
		while(true)
	{
		varN=varN+1;
			if(varN==3)
			{
			continue;      //Saltea el número 3.
			}
			alert("while"+varN);
				if(varN==6)
				{
				break;
				
			}alert("fin"+varN);
			
	}


		/*while(varN<11 && varN>0){
			alert(varN);
			varN=varN +1;
		}*/
	/*
		while(true) {
			alert("El numero es " + varN);
			if (varN==3) {
				break;
			}
			varN=varN+1;

		}*/


/*if(contador<10) //Primer forma que probamos.
	{
		alert("mensaje"+contador);
	}
	contador=contador+1;
	if(contador<10)
	{
		alert("mensaje"+contador);
	}*/

	/*if(contador<10) //Segunda forma.
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}
	if(contador<10)
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}
	if(contador<10)
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}*/
	

	//NUNCA SE HACE UNA ITERACIÓN CON IF
}//FIN DE LA FUNCIÓN