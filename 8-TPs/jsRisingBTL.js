/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{/*
 var edad;
 var sexo;
 var estCivil;
 var suelBruto;
 var numLeg;
 var nac;
		while(true) {
		edad=prompt("ingrese su edad");
			if (edad>=18 && edad<=90) 
			{
				document.getElementById('Edad').value= edad;
			} 	else 
				{
					alert("no posee edad adecuada");
					break;
				}	
		sexo=prompt("ingrese su sexo F o M");
			if (sexo=="F" || sexo=="M" || sexo=="f" || sexo=="m") 
			{
				document.getElementById('Sexo').value= sexo;
			} 	else 
				{
				alert("no ingreso un sexo valido");
				break;
				}
		estCivil=prompt("Ingrese su estado civil 1-para solteros, 2-para casados, 3-para divorciados y 4-para viudos");
			if (sexo =="M" || sexo=="m") 
			{
				switch(estCivil)
				{
					case "1":
					document.getElementById('EstadoCivil').value="Soltero";
					break;
					case "2":
					document.getElementById('EstadoCivil').value="Casado";
					break;
					case "3":
					document.getElementById('EstadoCivil').value="Divorciado";
					break;
					case "4":
					document.getElementById('EstadoCivil').value="Viudo";
					break;
				}
			} 	else 
				{
					switch(estCivil)
					{
						case "1":
						document.getElementById('EstadoCivil').value="Soltera";
						break;
						case "2":
						document.getElementById('EstadoCivil').value="Casada";
						break;
						case "3":
						document.getElementById('EstadoCivil').value="Divorciada";
						break;
						case "4":
						document.getElementById('EstadoCivil').value="Viuda";
						break;
					}
				}
		suelBruto=prompt("Ingrese su sueldo bruto");
			if (suelBruto>=8000) 
			{
				document.getElementById('Sueldo').value=suelBruto;
			}	else 
				{
					alert("Su sueldo es menor a 8000");
					break;
				}
		numLeg=prompt("Ingrese numero de legajo de 4 cifras");
			if (numLeg>999 && numLeg<10000) 
			{
				document.getElementById('Legajo').value=numLeg;
			}	else 
				{
					alert("Su numero de legajo es incorrecto");
					break;
				}
		nac=prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
			if (sexo =="F" || sexo=="f" ) 
			{	switch(nac)
				{
					case "A":
					document.getElementById('Nacionalidad').value="Argentina";
					break;
					case "E":
					document.getElementById('Nacionalidad').value="Extranjera";
					break;
					case "N":
					document.getElementById('Nacionalidad').value="Nacionalizada";
					break;
				}
			} 		else
					{
						switch(nac)
						{
							case "A":
							document.getElementById('Nacionalidad').value="Argentino";
							break;
							case "E":
							document.getElementById('Nacionalidad').value="Extranjero";
							break;
							case "N":
							document.getElementById('Nacionalidad').value="Nacionalizado";
							break;
						}
					}	break;
		}
		*/
	var edad = prompt("Ingrese su edad (debe estar entre 18 y 90 años inclusive)");
		while(isNaN(edad) || edad < 18 || edad > 90)
		{
			edad = prompt("Ingrese su edad (debe estar entre 18 y 90 años inclusive)");
		}
	document.getElementById("Edad").value = edad;


	var sexo = prompt("Ingrese su genero ('M': Masculino / 'F': Femenino)");
		while(sexo != "M" && sexo != "F")
		{
			sexo = prompt("Ingrese su genero ('M': Masculino / 'F': Femenino)");
		}
	document.getElementById("Sexo").value = sexo;

	var estadoCivil = prompt("Ingrese su estado civil (1: soltero / 2: casado / 3: divorciado / 4: viudo)");
		while(isNaN(estadoCivil) || estadoCivil < 1 && estadoCivil > 4)
		{
			estadoCivil = prompt("Ingrese su estado civil (1: soltero / 2: casado / 3: divorciado / 4: viudo)");
		}
	switch(estadoCivil){
		case "1":
			document.getElementById("EstadoCivil").value = "Soltero";
			break;
		case "2":
			document.getElementById("EstadoCivil").value = "Casado";
			break;
		case "3":
			document.getElementById("EstadoCivil").value = "Divorciado";
			break;
		case "4":
			document.getElementById("EstadoCivil").value = "Viudo";
			break;
	}

	var sueldo = prompt("Ingrese su sueldo bruto (debe Debe ser mayor a 8000)");
		while(isNaN(sueldo) || parseInt(sueldo) < 8000)
		{
			sueldo = prompt("Ingrese su sueldo bruto (debe Debe ser mayor a 8000)");
		}
	document.getElementById("Sueldo").value = sueldo;

	var legajo = prompt("Ingrese su legajo (4 dígitos)");
		while(isNaN(legajo) || parseInt(legajo) < 1000 || parseInt(legajo) > 9999)
		{
			legajo = prompt("Ingrese su legajo (4 dígitos)");
		}
	document.getElementById("Legajo").value = legajo;

	var nacionalidad = prompt("Ingrese su Nacionalidad ('A': Argentino / 'E': Extranjero / 'N': Nacionalizado)");
		while(parseInt(nacionalidad) < 18 || parseInt(edad) > 90)
		{
			nacionalidad = prompt("Ingrese su Nacionalidad ('A': Argentino / 'E': Extranjero / 'N': Nacionalizado)");
		}
	switch(nacionalidad)
	{
		case "A":
			document.getElementById('Nacionalidad').value = "Argentino";
			break;
		case "E":
			document.getElementById('Nacionalidad').value = "Extranjero";
			break;
		case "N":
			document.getElementById('Nacionalidad').value = "Nacionalizado";
			break;
	}
}
