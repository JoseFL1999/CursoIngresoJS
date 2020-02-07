/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;

	precioUno= document.getElementById('PrecioUno').value;
	precioUno= parseInt(precioUno);
	console.log("Precio uno es "+ precioUno+".");

	precioDos= document.getElementById('PrecioDos').value;
	precioDos= parseInt(precioDos);
	console.log("Precio dos es "+ precioDos+".");

	precioTres= document.getElementById('PrecioTres').value;
	precioTres= parseInt(precioTres);
	console.log("Precio tres es "+ precioTres+".");

	resultadoSuma= precioUno+ precioDos+ precioTres;
	alert("El precio total es "+resultadoSuma+".");
	console.log("El precio total es "+resultadoSuma+".");
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var resultadoPromedio;

	precioUno= document.getElementById('PrecioUno').value;
	precioUno= parseInt(precioUno);
	console.log("Precio uno es "+ precioUno+".");
	
	precioDos= document.getElementById('PrecioDos').value;
	precioDos= parseInt(precioDos);
	console.log("Precio dos es "+ precioDos+".");

	precioTres= document.getElementById('PrecioTres').value;
	precioTres= parseInt(precioTres);
	console.log("Precio tres es "+ precioTres+".");

	sumaPrecios= precioUno+ precioDos+ precioTres;
	resultadoPromedio= sumaPrecios/3;
	resultadoPromedio= parseInt(resultadoPromedio);
	alert("El precio total es "+resultadoPromedio+".");
	console.log("El precio total es "+resultadoPromedio+".");
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var iva;
	var precioUnoIva;
	var precioDosIva;
	var precioTresIva;
	var precioFinal;

	iva = 21

	precioUno= document.getElementById('PrecioUno').value;
	precioUno= parseInt(precioUno);
	console.log("Precio uno es "+ precioUno+".");

	precioDos= document.getElementById('PrecioDos').value;
	precioDos= parseInt(precioDos);
	console.log("Precio dos es "+ precioDos+".");

	precioTres= document.getElementById('PrecioTres').value;
	precioTres= parseInt(precioTres);
	console.log("Precio tres es "+ precioTres+".");

	precioUnoIva= precioUno + precioUno*iva/100;
	precioUnoIva= parseInt(precioUnoIva);
	console.log("El precio uno con iva es "+ precioUnoIva+".");
	
	precioDosIva= precioDos + precioDos*iva/100;
	precioDosIva= parseInt(precioDosIva);
	console.log("El precio dos con iva es "+ precioDosIva+".");

	precioTresIva= precioTres + precioTres*iva/100;
	precioTresIva= parseInt(precioTresIva);
	console.log("El precio tres con iva es "+ precioTresIva+".");

	precioFinal= precioUnoIva + precioDosIva + precioTresIva;
	precioFinal= parseInt(precioFinal);
	alert("El precio final es "+ precioFinal+".");
	console.log("El precio final es "+ precioFinal+".");


}