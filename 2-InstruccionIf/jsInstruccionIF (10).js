function mostrar()
{
	var numeroRandom;
	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = Math.floor(Math.random() * 10) + 1;
	console.log(numeroRandom);

	if(numeroRandom>8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(numeroRandom<4)
		{
			alert("Vamos, la proxima se puede");
		}

		else
		{
			alert("APROBÒ");
		}
	}
	

}//FIN DE LA FUNCIÓN