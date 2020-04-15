/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var num1;
    var num2;
    var resultado;
	
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
 
    resultado = parseInt(num1) + parseInt(num2);

    alert ("La suma es " + resultado);
}

function restar()
{   
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

	resultado = parseInt(num1) - parseInt(num2);

    alert ("La resta es " + resultado);
}

function multiplicar()
{ 
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    resultado = parseInt(num1) * parseInt(num2);

    alert ("El producto es " + resultado);
}

function dividir()
{
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    resultado = parseInt(num1) / parseInt(num2);

    alert ("El saldo es " + resultado);
}

