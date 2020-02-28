
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var contador;
	var temperatura;
	var respuesta;
	var maximaTemperatura;
	var minimaTemperatura;
	var nombreMaximaTemperatura;
	var edadMaximaTemperatura;
	var sexoMaximaTemperatura;
	var edadMaxima;
	var edadMinima;
	var temperaturaEdadMaxima;
	var temperaturaEdadMinima;
	var promedioEdad;
	var sumaEdad;
	var promedioEdadMujeres;
	var sumaEdadMujeres;
	var contadorEdad;
	var contadorEdadMujeres;


	respuesta="si";
	contador=0;
	contadorEdad=0;
	contadorEdadMujeres=0;
	sumaEdad=0;
	sumaEdadMujeres=0;

	while(respuesta=="si")
	{
		nombre=prompt("Escriba su nombre.");
		while(!isNaN(nombre))
		{
			nombre=prompt("Reescriba su nombre.");
		}
		edad=prompt("Escriba su edad.");
		edad=parseInt(edad);
		while(isNaN(edad)||(edad<0||edad>110))
		{
			edad=prompt("Error, escriba su edad correcta.");
			edad=parseInt(edad);
		}
		sexo=prompt("Escriba su edad si es 'f' o 'm'");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error, solo escriba su sexo 'f' o 'm'");	
		}
		temperatura=prompt("Escriba su temperatura corporal en Celcius");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||(temperatura<35||temperatura>42))
		{
			temperatura=prompt("Error solo escriba su temperatura corporal en Celcius");
			temperatura=parseInt(temperatura);
		}
		contador=contador+1;
		if(contador==1)
		{
			maximaTemperatura=temperatura;
			minimaTemperatura=temperatura;
		}
		else
		{
			if(temperatura>maximaTemperatura)
			{
				maximaTemperatura=temperatura;
				
			}
			if(temperatura<minimaTemperatura)
			{
				minimaTemperatura=temperatura;
			}
		}
		if(temperatura==maximaTemperatura)
		{
			nombreMaximaTemperatura=nombre;
			sexoMaximaTemperatura=sexo;
		}

		if((temperatura>38)&&(edad<12||edad>60))
		{
			alert("Esta en riesgo");
		}
		if(contador==1)
		{
			edadMaxima=edad;
			edadMinima=edad;
		}
		else
		{
			if(edad>edadMaxima)
			{
				edadMaxima=edad;
			}
			if(edad<edadMinima)
			{
				edadMinima=edad;				
			}
		}
		if(edad==edadMaxima)
		{
			temperaturaEdadMaxima=temperatura;
		}
		if(edad==edadMinima)
		{
			temperaturaEdadMinima=temperatura;
		}
		contadorEdad=contadorEdad+1;
		sumaEdad=sumaEdad+edad;
		promedioEdad=sumaEdad/contadorEdad;
		if(sexo=="f")
		{	
			contadorEdadMujeres=contadorEdadMujeres+1;
			sumaEdadMujeres=sumaEdadMujeres+edad;
			promedioEdadMujeres=sumaEdadMujeres/contadorEdadMujeres;
		}

		respuesta=prompt("Si desea continuar escriba 'si'");	
	}

	document.write("Mayor temperatura, Nombre: "+nombreMaximaTemperatura+"  Sexo: "+sexoMaximaTemperatura+"<br>");
	document.write("La temperatura del mas joven es "+temperaturaEdadMinima+ "   Temperatura del mayor es "+temperaturaEdadMaxima+"<br>");
	document.write("Promedio de edad total es "+ promedioEdad+"  El promedio de edad de mujeres es "+promedioEdadMujeres);
}
