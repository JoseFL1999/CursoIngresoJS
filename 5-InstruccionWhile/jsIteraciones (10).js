function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var cantidadPares;
	var respuesta;
	
	respuesta="si";
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNegativos=0;
	sumaPositivos=0;
	sumaNegativos=0;
	cantidadPares=0;

	
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Error, solo ingrese numeros.");
			numeroIngresado=parseInt(numeroIngresado);			
		}
		if(numeroIngresado>0)
		{		
			cantidadPositivos=cantidadPositivos+1;			
			sumaPositivos=sumaPositivos+numeroIngresado;
			sumaPositivos=parseInt(sumaPositivos);
			promedioPositivos=sumaPositivos/cantidadPositivos;				
		}	
		if(numeroIngresado<0)
		{		
			cantidadNegativos=cantidadNegativos+1;
			sumaNegativos=sumaNegativos+numeroIngresado;
			sumaNegativos=parseInt(sumaNegativos);
			promedioNegativos=sumaNegativos/cantidadNegativos;
		}
		if(numeroIngresado==0)
		{
			cantidadCeros=cantidadCeros+1;
		}
		diferenciaPositivosNegativos=sumaPositivos - sumaNegativos;
		respuesta=prompt("Si desea continuar escriba'si'.");
		switch(cantidadPositivos)
			{
				case 0:
					promedioPositivos=0
					break;
			}
		switch(cantidadNegativos)
			{
				case 0:
					promedioNegativos=0
					break;
			}
		
		if(numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadPares=cantidadPares+1
		}


	}
	alert("1.- La suma de los negativos es "+ sumaNegativos + "."+
			  "  2.- La suma de los positivos es "+sumaPositivos + "."+
			  "  3.- La cantidad de positivos es "+cantidadPositivos + "."+
			  "  4.- La cantidad de negativos es "+cantidadNegativos + "."+
			  "  5.- La cantidad de ceros es "+cantidadCeros + "."+
			  "  6.- La cantidad de numeros pares es "+cantidadPares + "."+
			  "  7.- El promedio de positivos es "+promedioPositivos + "."+
			  "  8.- El promedio de negativos es "+promedioNegativos + "."+
			  "  9.- La diferencia de positivos y negativos es " + diferenciaPositivosNegativos + "."
		);
	console.log(numeroIngresado%2)



}//FIN DE LA FUNCIÓN