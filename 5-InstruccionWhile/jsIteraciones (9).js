function mostrar()
{
	var contador;
	var respuesta;
	var maximo;
	var minimo;
	var numeroIngresado;
	contador=0;
	// declarar variables
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador + 1;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}
		else
		{	
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}

		}
		respuesta=prompt("Ingrese 'si' si desea continuar");
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN