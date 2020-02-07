/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var cantidadDeAlambre;
	var perimetroTerreno;
	
	largoTerreno= document.getElementById('Largo').value;
	largoTerreno= parseInt(largoTerreno);
	console.log("El largo del terreno es "+ largoTerreno+ ".");

	anchoTerreno= document.getElementById('Ancho').value;
	anchoTerreno= parseInt(anchoTerreno);
	console.log("El ancho del terreno es "+ anchoTerreno+ ".");

	perimetroTerreno= 2*largoTerreno+2*anchoTerreno;
	perimetroTerreno= parseInt(perimetroTerreno);

	cantidadDeAlambre= 3*perimetroTerreno;
	cantidadDeAlambre= parseInt(cantidadDeAlambre);
	alert("Se debe comprar "+ cantidadDeAlambre+ " alambres.");
	console.log("Se debe comprar "+ cantidadDeAlambre+ " alambres.")
	
}


function Circulo () 
{
	var radioTerreno;
	var cantidadDeAlambre;
	var perimetroTerreno;

	radioTerreno= document.getElementById('Radio').value;
	radioTerreno= parseInt(radioTerreno);
	console.log("El radio del terreno es "+ radioTerreno+ ".");

	perimetroTerreno= 2* Math.PI* radioTerreno;
	perimetroTerreno= parseInt(perimetroTerreno);


	cantidadDeAlambre= 3*perimetroTerreno;
	cantidadDeAlambre= parseInt(cantidadDeAlambre);
	alert("La cantidad de alambre a comprar es "+cantidadDeAlambre+ " alambres.");
	console.log("La cantidad de alambre a comprar es "+cantidadDeAlambre+ " alambres.");
	

}



function Materiales () 

{
	var largoTerreno;
	var anchoTerreno;
	var bolsaDeCemento;
	var calTerreno;
	
	largoTerreno= document.getElementById('Largo').value;
	largoTerreno= parseInt(largoTerreno);
	console.log("El largo del terreno es "+ largoTerreno+ ".");

	anchoTerreno= document.getElementById('Ancho').value;
	anchoTerreno= parseInt(anchoTerreno);
	console.log("El ancho del terreno es "+ anchoTerreno+ ".");

	bolsaDeCemento= 2*largoTerreno*anchoTerreno;
	bolsaDeCemento= parseInt(bolsaDeCemento);

	calTerreno= 3*largoTerreno*anchoTerreno;
	calTerreno= parseInt(calTerreno);

	alert("Se necesitan "+ bolsaDeCemento+ " bolsas de cemento y "+ calTerreno+ " de cal.");
	console.log("Se necesitan "+ bolsaDeCemento+ " bolsas de cemento y "+ calTerreno+ " de cal.");


}