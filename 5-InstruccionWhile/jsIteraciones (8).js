function Mostrar()
{

	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var producto = 1;

	while (confirm("Desea continuar"))
	{
		contador ++;
		numero = prompt ("Ingrese números positivos y negativos");
		numero = parseInt (numero);
		
		if (numero >= 0)
		{
			acumulador = acumulador + numero;
		}
		else
		{
			producto = producto * numero;
		}
	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("producto").value = producto;

}//FIN DE LA FUNCIÓN