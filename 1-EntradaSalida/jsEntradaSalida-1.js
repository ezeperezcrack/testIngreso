//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
	/*alert("Esto funciona de maravilla");
*/
var contador=0;
var respuesta="si";
var nombre;
var edad;
var sexo;
var nota;
var promedio=0;
var promVa=0;
var contVa=0;
var promMu=0;
var contMu=0;
var min;
var max;
var maxNom;
var hombMa=0;
var muMa=0;

	
	while(contador<15 && respuesta=="si")
	{
		contador++;
		nombre=prompt("ingrese su nombre");
		edad=prompt("ingrese su edad");
			while(isNaN(edad) || edad<1 || edad>100)
			{
				edad=prompt("Ingrese edad valida");
			}
		sexo=prompt("ingrese sexo f o m");
			while(sexo!="f" && sexo != "m")
			{
				sexo=prompt("ingrese sexo valido por favor");
			}
		nota=prompt("ingrese nota");
			while(isNaN(nota) || nota<0 || nota>10) 
			{
				nota=prompt("ingrese nota valida");
			}
				if (sexo=="f" && edad>=18 && nota >5) 
				{
					muMa++;
				}
				if (sexo=="m" && edad>=18) 
				{
					hombMa++;
				}
		promedio=parseInt(promedio)+parseInt(nota);
			if (sexo=="f") 
			{
				promMu=parseInt(promMu)+parseInt(edad);
				contMu++;
			}
			if (sexo=="m") 
			{
				promVa=parseInt(promVa)+parseInt(edad);
				contVa++;
			}
			if (contador==1) 
			{
				min=edad;
				max=nota;
				maxNom=nombre
			} 	else
				{
					if (edad<min) 
					{
						min=edad;
					}
				}
			if (nota>max) 
					{
						max=nota;
						maxNom=nombre;
					}	
				
	respuesta=prompt("desea seguir ingresando datos? Responda si o no");			
	}
alert("datos ingresados " + contador);
alert("Hombres mayores de edad " +hombMa);
alert("mujeres mayores con nota mayor a 5 " + muMa);
alert("promedio de todas las notas" + Math.floor(promedio/contador));
	if (contVa==0) 
	{
		alert("promedio de edad de varones es 0");
	}	else
		{
		alert("promedio de edad de varones " + Math.floor(promVa/contVa));
		}
	if (contMu==0) 
	{
		alert("promedio de edad de mujeres es 0");
	} 	else
		{
			alert("promedio de edad de mujeres " + Math.floor(promMu/contMu));
		}
alert("la edad minima " + min);
alert("la mejor nota la tuvo "+maxNom+" y fue" + max);
}
