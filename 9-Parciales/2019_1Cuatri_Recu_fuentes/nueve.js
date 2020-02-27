function mostrar()
{
	var nombreEstudiante;
	var edad;
	var sexo;
	var notaFinal;
	var respuesta;
	var varonesAprobados;
	var promedioMenoresDeedad;
	var cantidadMenores;
	var notaMenores;
	var notaAdolescente;
	var promedoAdolescente;
	var cantidadAdolescente;
	var notaMayores;
	var promedioMayores;
	var cantidadMayores;
	var cantidadMasculino;
	var cantidadFemenino;
	var notaFemenino;
	var notaMasculino;
	var promedioMasculino;
	var promedioFemenino;
	cantidadMasculino=0;
	cantidadFemenino=0;
	notaMasculino=0;
	notaFemenino=0;
	respuesta="si";
	cantidadMenores=0;
	varonesAprobados=0;
	notaMenores=0;
	notaAdolescente=0;
	cantidadAdolescente=0;
	notaMayores=0;
	cantidadMayores=0;

	while(respuesta=="si")
	{
		nombreEstudiante=prompt("Ingrese su nombre");
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while(isNaN(edad)||(edad<0||edad>110))
		{
			edad=prompt("Error, solo numeros");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese su sexo 'f' o 'm'");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Reingrese su sexo solo 'f' o 'm'");12
		}
		notaFinal=prompt("Ingrese su nota final");
		notaFinal=parseInt(notaFinal);
		while(isNaN(notaFinal))
		{
			notaFinal=prompt("Error, reingrese su nota final");
			notaFinal=parseInt(notaFinal);
		}
		if(sexo=="m"&&notaFinal>5)
		{
			varonesAprobados=varonesAprobados+1;
		}
		if(edad<18)
		{	
			notaMenores=notaMenores+notaFinal;
			cantidadMenores=cantidadMenores+1;
			promedioMenoresDeedad=notaMenores/cantidadMenores;
		}
		if(edad>12&&edad<18)
		{
			notaAdolescente=notaAdolescente+notaFinal;
			cantidadAdolescente=cantidadAdolescente+1;
			promedoAdolescente=notaAdolescente/cantidadAdolescente;
		}
		if(edad>17)
		{
			notaMayores=notaMayores+notaFinal;
			cantidadMayores++;
			promedioMayores=notaMayores/cantidadMayores;
		}
		if(sexo=="m")
		{
			notaMasculino=notaMasculino+notaFinal;
			cantidadMasculino++;
			promedioMasculino=notaMasculino/cantidadMasculino;
		}
		if(sexo=="f")
		{
			notaFemenino=notaFemenino+notaFinal;
			cantidadFemenino++;
			promedioFemenino=notaFemenino/cantidadFemenino;
		}

		respuesta=prompt("Si desea continuar escriba si");

	}

	document.write("La cantidad de varones aprobados es "+varonesAprobados+ "<br>");
	document.write("El promedio de notas de menores de edad es "+promedioMenoresDeedad+"<br>");
	document.write("El promedio de notas adolescentes es "+promedoAdolescente+"<br>");
	document.write("El promedio de notas de los mayores es "+promedioMayores+"<br>");
	document.write("El promedio de sexo masculino y femenino es "+promedioMasculino+" y "+promedioFemenino);

}
