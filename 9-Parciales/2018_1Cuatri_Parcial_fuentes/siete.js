function mostrar()
{
	var sexo;
	var notas;
	var contador;
	var promedio;
	var sumaNotas;
	var maximo;
	var minimo;
	var sexoMinimo;
	var sexoMaximo;
	var contadorVaronesmayor;
	contador=0;
	promedio=0;
	sumaNotas=0;
	contadorVaronesmayor=0;
	while(contador!=5)
	{	
		contador=contador+1;
		notas=prompt("Ingrese su nota");
		notas=parseInt(notas);
		while(isNaN(notas)||(notas>11||notas<-1))
		{
			notas=prompt("Error, solo ingrese numeros");
		}
		sexo=prompt("Ingrese 'f' o 'm' segun su sexo.");
		while(sexo!="f"&&sexo!="m")
		{	
			sexo=prompt("Ingrese 'f' o 'm' segun su sexo.");
		}
		if(contador==1)
		{
			maximo = notas;
			minimo = notas;
		}
		else
		{	
			if(notas>maximo)
			{
				maximo=notas;
				sexo=sexoMaximo;
			}
			if(notas<minimo)
			{
				minimo=notas;
				sexo=sexoMinimo;
			}
		}
		if(sexo=="m"&& notas>5)
		{
			contadorVaronesmayor=contadorVaronesmayor+1
		}		
		sumaNotas=sumaNotas+notas;
		sumaNotas=parseInt(sumaNotas);
		promedio=sumaNotas/contador;

	}
	alert("a) Promedio de notas es "+promedio+"   b) La nota mas baja es "+minimo+"y su sexo "+sexoMinimo+"   c) Cantidad de varones mayor a 6 " +contadorVaronesmayor);
}