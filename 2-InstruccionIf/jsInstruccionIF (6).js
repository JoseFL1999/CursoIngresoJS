function mostrar()
{
	var edad;
	//tomo la edad
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		alert("Es niño");
	}

	else

	{
		if (edad > 17)
		{
			alert("Es mayor");
		}

		else
		{
			alert("Es adolescente");
		}
	}





}//FIN DE LA FUNCIÓN