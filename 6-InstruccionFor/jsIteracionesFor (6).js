function mostrar()
{	
	var contador;
	var numeroLimite;
	var numerosPares;
	var cantidadNumerosPares;
	numeroLimite=prompt("Ingrese");
	cantidadNumerosPares=0
	for(contador=0;contador<numeroLimite;console.log(contador))
	{
		contador=contador+2
		if(contador>numeroLimite)
		{
			break;
		}
		cantidadNumerosPares=cantidadNumerosPares+1;
	}

	alert("Cantidad de numeros pares es "+cantidadNumerosPares);


}//FIN DE LA FUNCIÓN