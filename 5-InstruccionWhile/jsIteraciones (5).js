function mostrar()
{
	var sexo
	sexo = prompt("ingrese f ó m .");
	sexo = document.getElementById('Sexo').value

while(sexo!="m" || sexo!="f")
{
	sexo = prompt("ingrese f ó m .");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN