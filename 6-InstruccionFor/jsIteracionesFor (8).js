function mostrar()
{	var numeroIngresado;
	var i;
	var bandera;
	bandera=0;
	numeroIngresado=prompt("Ingrese un numero");
	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			bandera=1;
		}
	}
	if(bandera!=1)
	{
		alert("Es primo el "+numeroIngresado);
	}


}//FIN DE LA FUNCIÓN