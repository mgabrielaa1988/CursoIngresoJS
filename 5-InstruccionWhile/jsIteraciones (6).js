function Mostrar()
{
	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	while (contador < 5)
	{
		contador = contador + 1;
		numero = prompt ("Ingrese los numeros");
		numero = parseInt (numero);
		acumulador = acumulador + numero;
		acumulador = parseInt (acumulador);

		while (isNaN(numero))
		{
			numero = prompt ("Ingrese sólo numeros");
			numero = parseInt (numero);
		}
	}

	promedio = acumulador / 5;
	promedio = parseInt (promedio);

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN