/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	//primerNumero=2;
	//segundoNumero=3;
	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);
	console.log(primerNumero);
	/*primerNumero=parseInt("33");
	primerNumero=parseInt("lalala");
	primerNumero=parseInt("m33");
	primerNumero=parseInt("33m");
	primerNumero=parseInt("3m3m");*/




	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);


	suma= primerNumero+segundoNumero;
	alert(suma);

}

