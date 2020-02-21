function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta="si";
	
	while(respuesta=="si")
	{
		contador ++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error solo numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}	
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("Si quiere continuar la operacion ingrese 'si'");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN