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
			break;
		}
	}
	if(bandera!=1)
	{
		alert("Es primo el "+numeroIngresado);
	}

	/*do
	{
		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
	}while(edad<0||edad>110);*/


}//FIN DE LA FUNCIÓN