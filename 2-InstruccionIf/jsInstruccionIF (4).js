function mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	edad = edad > 12 && edad <18

//tomo la edad  
	
	if(edad)
	{
		alert("Usted es adolescente");
	}
	else
	{
		alert("Usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN