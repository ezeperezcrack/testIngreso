/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*	if(cant>=6){
			descuento=0.50;
 		}else if (cant==5){
 					switch(marca) {
 					case"argentinaLuz":
 					descuento=0.6;
 					break;
 					*/

 	var cant=document.getElementById('Cantidad').value;
 	var marca=document.getElementById('Marca').value;
 	var precioBruto=(35*cant);
 	var precioNeto;
 	var precioFinal; 	
 		switch (marca) {
 			case "ArgentinaLuz":
 				if (cant==3) {
 					
 					descuento=0.85;
 				 					
 				}	else if (cant==4) {
 					
 					descuento=0.75;
 				 					
 				}	else if (cant==5){
 					descuento=0.60;
 				}
 			break;
 			case "FelipeLamparas":
 				if (cant==4) {
 					descuento=0.80;
 				};else if (cant==3) {
 					descuento=0.90;
 				};
 			break;
 			default:
 				if (cant==3) {
 				descuento=0.95;
 				}
 	 	}//switch
 	 		if (cant>=6) {
 			descuento=0.50;
			}
 precioNeto=precioBruto*descuento;
	if (precioNeto>=120) {
		precioFinal=precioNeto*0.1;
		alert("IIBB usted pago "+precioFinal);
	}
document.getElementById('precioDescuento').value=precioNeto;
}//funcion
