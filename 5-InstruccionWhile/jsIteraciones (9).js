function Mostrar()
{
	var numero;
	var respuesta = true;
	var minimo;
	var maximo;
	var primera = true;
	
	while (confirm("Desea continuar"))
	{
		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);
		
		if (primera)
		{
			minimo = numero;
			maximo = numero;
			primera = false;
		}

		else if (numero < minimo)
		{
			minimo = numero;
		}

		else if (numero > maximo)
		{
			maximo = numero;
		}

	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN