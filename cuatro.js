function mostrar()
{	
	var nombre;
	var cantidadPersonas;
	var cantidadDiaEstadia;
	var formaPago;
	var contador;
	var huespedesMaximo;
	var huespedesMinimo;
	var cantidadPersonasMasDias;
	var cantidadDiaMaximos;
	var cantidadDiaMinimos;
	var cantidadPagoEfectivo;
	var cantidadPagoTarjeta;
	var cantidadPagoQr;
	var cantidadPagoMasUtilizada;
	var promedioDias;
	var sumaDias;
	var nombrePersonasHuespedesMax;
	var maximoCantidad;
	sumaDias=0;
	contador=0;
	cantidadPagoQr=0;
	cantidadPagoTarjeta=0;
	cantidadPagoEfectivo=0;

	respuesta="si";

	while(respuesta=="si")
	{	
		nombre=prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("Por favor reingrese su nombre");

		}
		cantidadPersonas=prompt("Ingrese la cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);
		while(isNaN(cantidadPersonas))
		{
			cantidadPersonas=prompt("Solo ingrese la cantidad de personas");
			cantidadPersonas=parseInt(cantidadPersonas);
		}
		cantidadDiaEstadia=prompt("Ingrese los dias de estadia");
		cantidadDiaEstadia=parseInt(cantidadDiaEstadia);
		while(isNaN(cantidadDiaEstadia))
		{
			cantidadDiaEstadia=prompt("Solo ingrese los dias de estadia");
			cantidadDiaEstadia=parseInt(cantidadDiaEstadia);
		}
		formaPago=prompt("Ingrese la forma de pago 'efectivo' , 'tarjeta' o 'qr'");
		while((formaPago!="efectivo"&&formaPago!="tarjeta")&&formaPago!="qr")
		{
			formaPago=prompt("Solo ingrese la forma de pago 'efectivo' , 'tarjeta' o 'qr'");
		}
		contador=contador+1;
		if(contador==1)
		{
			huespedesMaximo=cantidadPersonas;
			huespedesMinimo=cantidadPersonas;
		}
		else
		{
			if(cantidadPersonas>huespedesMaximo)
			{
				huespedesMaximo=cantidadPersonas;
			}
			if(cantidadPersonas<huespedesMinimo)
			{
				huespedesMinimo=cantidadPersonas;
			}
		}
		if(cantidadPersonas==huespedesMaximo)
		{
			nombrePersonasHuespedesMax=nombre;
		}

		if(contador==1)
		{
			cantidadDiaMaximos=cantidadDiaEstadia;
			cantidadDiaMinimos=cantidadDiaEstadia;
		}
		else
		{
			if(cantidadDiaEstadia>cantidadDiaMaximos)
			{
				cantidadDiaMaximos=cantidadDiaEstadia;
				
			}
			if(cantidadDiaEstadia<cantidadDiaMinimos)
			{
				cantidadDiaMinimos=cantidadDiaEstadia;
			}
		}
		if(cantidadDiaEstadia==cantidadDiaMaximos)
			{
				cantidadPersonasMasDias=cantidadPersonas;
			}
		if(formaPago=="efectivo")
		{
			cantidadPagoEfectivo=cantidadPagoEfectivo+1;
		}
		if(formaPago=="tarjeta")
		{
			cantidadPagoTarjeta=cantidadPagoTarjeta+1;
		}
		if(formaPago=="qr")
		{
			cantidadPagoQr=cantidadPagoQr+1;
		}
		if(contador==1)
		{	
			maximoCantidad=cantidadPagoTarjeta;
			maximoCantidad=cantidadPagoQr;
			maximoCantidad=cantidadPagoEfectivo;
		}
		else
		{
			if(cantidadPagoTarjeta>maximoCantidad)
			{
				maximoCantidad=cantidadPagoTarjeta;
			}
			if(cantidadPagoQr>maximoCantidad)
			{
				maximoCantidad=cantidadPagoQr;
			}
			if(cantidadPagoEfectivo>maximoCantidad)
			{
				maximoCantidad=cantidadPagoEfectivo;
			}
		}
		if(maximoCantidad==cantidadPagoTarjeta)
		{
			cantidadPagoMasUtilizada="tarjeta"
		}
		if(maximoCantidad==cantidadPagoQr)
		{
			cantidadPagoMasUtilizada="qr"
		}
		if(maximoCantidad==cantidadPagoEfectivo)
		{
			cantidadPagoMasUtilizada="efectivo"
		}

	
		

		sumaDias=sumaDias+cantidadDiaEstadia;
		promedioDias=sumaDias/contador;

		respuesta=prompt("Si desea agregar mas reservas escriba 'si'.")

	}
	document.write("huésped que trajo más personas en una sola reserva "+nombrePersonasHuespedesMax+"<br>");
	document.write("la cantidad de personas que se quedaron más días "+cantidadPersonasMasDias+"<br>");
	document.write("la forma de pago más utilizada "+cantidadPagoMasUtilizada+"<br>");
	document.write("el promedio de cantidad de días por reserva "+promedioDias);

}
