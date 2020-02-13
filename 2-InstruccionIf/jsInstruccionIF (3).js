function mostrar()
{
	var edad;
	//tomo la edad
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);  
   	if(edad > 17)
   	{
   		alert("Usted es mayor de edad");
   	}

   	else
   	{
   		alert("Usted es menor de edad");
   	}

}//FIN DE LA FUNCIÓN