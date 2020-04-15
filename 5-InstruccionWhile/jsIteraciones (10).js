function Mostrar()
{

	var numero;
	var respuesta = true;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while (confirm("Desea continuar"))
	{
		numero = prompt ("Ingrese un numero");
		numero = parseInt (numero);

		if (numero > 0)
		{
			contadorPositivos ++;
			acumuladorPositivos = acumuladorPositivos + numero;
		}

		else if (numero < 0)
		{
			contadorNegativos ++;
			acumuladorNegativos = acumuladorNegativos + numero;
		}

		else if (numero == 0)
		{
			contadorCeros ++
		}

		else if (numero % 2 == 0)
		{
			contadorPares ++;
		}

	}

	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferencia = acumuladorPositivos + acumuladorNegativos;

document.write ("La suma de los numeros negativos es: " + acumuladorNegativos + "<br>");
document.write ("La suma de los numeros positivos es: " + acumuladorPositivos + "<br>");
document.write ("La cantidad de numeros positivos es: " + contadorPositivos + "<br>");
document.write ("La cantidad de numeros negativos es: " + contadorNegativos + "<br>");
document.write ("La cantidad de ceros es: " + contadorCeros + "<br>");
document.write ("La cantidad de numeros pares es: " + contadorPares + "<br>");
document.write ("El promedio de los números positivos es: " + promedioPositivos + "<br>");
document.write ("El promedio de los numeros negativos es: " + promedioNegativos + "<br>");
document.write ("La diferencia entre positivos y negativos es igual a: " + diferencia);

}//FIN DE LA FUNCIÓN