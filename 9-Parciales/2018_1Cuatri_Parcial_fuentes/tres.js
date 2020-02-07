function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;
	var descuento;

	precio = prompt("Coloque el precio");
	console.log("el precio es " +precio);
	porcentaje= prompt("Coloque el % de descuento");
	console.log("El porcentaje de descuento es "+ porcentaje);

	descuento= precio*porcentaje/100;

	precioFinal= precio - descuento;
	document.getElementById('elPrecioFinal').value=precioFinal;

	console.log("el precio final es "+ precioFinal);
}
