function mostrar()
{	
	var cantidadSoporteKilo;
	var marca;
	var kilosPorBolsa;
	var cantidadBolsa;
	var importeBolsa;
	var kilosTotalPorMarca;
	var contador;
	var kilosMaximosPorMarca;
	var kilosMinimosPorMarca;
	var marcaKilosMaximo;
	var bolsasMaximo;
	var bolsasMinimo;
	var marcaBolsasMaximo;
	var importeBolsaMaximo;
	var importeBolsaMinimo;
	contador=0;

	cantidadSoporteKilo=0;
	kilosTotalPorMarca=kilosPorBolsa*cantidadBolsa;

	while(cantidadSoporteKilo<1001)
	{
		marca=prompt("Ingrese el nombre de la marca.");
		kilosPorBolsa=prompt("Ingrese cuantos kg's tiene cada bolsa.");
		kilosPorBolsa=parseInt(kilosPorBolsa);
		while(isNaN(kilosPorBolsa))
		{
			kilosPorBolsa=prompt("Solo ingrese cuantos kg's tiene cada bolsa.");
			kilosPorBolsa=parseInt(kilosPorBolsa);
		}
		if(kilosPorBolsa>1000)
		{
			alert("Se excedio de peso vuelva a actualizar");
			break;
		}
		cantidadBolsa=prompt("Ingrese la cantidad de bolsas.");
		cantidadBolsa=parseInt(cantidadBolsa);
		while(isNaN(cantidadBolsa))
		{
			cantidadBolsa=prompt("Solo ingrese la cantidad de bolsas.");
			cantidadBolsa=parseInt("cantidadBolsa");
		}
		if((kilosPorBolsa*cantidadBolsa)>1000)
		{
			alert("Se excedio de peso vuelva a actualizar");
			break;
		}
		importeBolsa=prompt("Ingrese el importe de cada bolsa");
		importeBolsa=parseInt(importeBolsa);
		while(isNaN(importeBolsa))
		{
			importeBolsa=prompt("Solo ingrese el importe de cada bolsa");
			importeBolsa=parseInt(importeBolsa);
		}
		contador=contador+1;
		if(contador==1)
		{
			kilosMaximosPorMarca=kilosTotalPorMarca;
		}
		else
		{
			if(kilosTotalPorMarca>kilosMaximosPorMarca)
			{
				kilosMaximosPorMarca=kilosTotalPorMarca;
			}
		}
		if(kilosTotalPorMarca==kilosMaximosPorMarca)
		{
			marcaKilosMaximo=marca;
		}
		if(contador==1)
		{
			bolsasMaximo=bolsas;
		}
		else
		{
			if(bolsas>bolsasMaximo)
			{
				bolsasMaximo=bolsas;
			}
		}
		if(bolsas==bolsasMaximo)
		{
			marcaBolsasMaximo=marca;
		}
		if(contador==1)
		{
			importeBolsaMaximo
		}






	}

  	document.write("marca tiene más kilos en el contenedor: "+marcaKilosMaximo+"<br>");
  	document.write("marca tiene más bolsas de alimento en el contenedor: "+marcaBolsasMaximo+"<br>");
}
