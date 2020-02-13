function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	//tomo la edad 

	edad = edad > 17

	if(edad)
	{
		alert("Usted es mayor de edad");
	} 

	else
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN