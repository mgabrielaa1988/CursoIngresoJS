/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById("Largo").value;
    largo = parseInt (largo);
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt (ancho);
    perimetro = largo * 2 + ancho * 2;
    alert (perimetro * 3 + " metros de alambre.");
}

function Circulo () 
{
	var radio;
    var perimetro;

    radio = document.getElementById("Radio").value;
    radio = parseInt (radio);
    perimetro = 2 * Math.PI * radio;
    perimetro = parseInt (perimetro);
    alert (perimetro * 3 + " metros de alambre.");
}

function Materiales () 
{
	var ancho;
    var largo;
    var area;

    largo = document.getElementById("Largo").value;
    largo = parseInt (largo);
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt (ancho);
    area = largo * ancho;
    alert ("Para " + area + " metros cuadrados se necesitan " + area * 2 + " bolsas de cemento y " + area * 3 + " bolsas de cal.")
}