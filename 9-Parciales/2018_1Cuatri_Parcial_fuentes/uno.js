
function mostrar()
{
	var anchoRectangulo;
	var largoRectangulo;
	var perimetroRectangulo;

	anchoRectangulo= prompt("Escriba el ancho del rectangulo");
	console.log("El ancho del rectangulo es "+ anchoRectangulo);

	largoRectangulo= prompt("Escriba el largo del rectangulo ");
	console.log("El largo del rectangulo es "+ largoRectangulo);

	perimetroRectangulo= 2*anchoRectangulo + 2*largoRectangulo;
	alert("El perimetro del rectangulo es "+ perimetroRectangulo);




}
