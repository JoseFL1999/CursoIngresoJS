function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var numeroIngresado;
	
	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';
	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			negativo = negativo*numeroIngresado;
		}
		else
		{
			positivo = positivo+numeroIngresado;
		}
		respuesta = prompt("Si quiere seguir escriba 'si'");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN