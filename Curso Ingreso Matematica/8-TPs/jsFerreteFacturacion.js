/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;

function Sumar () 
{
   precioUno = document.getElementById("PrecioUno").value;
   precioUno = parseInt (precioUno);
   precioDos = document.getElementById("PrecioDos").value;
   precioDos = parseInt (precioDos);
   precioTres = document.getElementById("PrecioTres").value;
   precioTres = parseInt (precioTres);

   alert (precioUno + precioDos + precioTres);
}

function Promedio () 
{
   precioUno = document.getElementById("PrecioUno").value;
   precioUno = parseInt (precioUno);
   precioDos = document.getElementById("PrecioDos").value;
   precioDos = parseInt (precioDos);
   precioTres = document.getElementById("PrecioTres").value;
   precioTres = parseInt (precioTres);

   alert ((precioUno + precioDos + precioTres)/3);
}

function PrecioFinal () 
{
   var IVA = 1.21;

   precioUno = document.getElementById("PrecioUno").value;
   precioUno = parseInt (precioUno);
   document.getElementById("PrecioUno").value = precioUno * IVA;
   precioDos = document.getElementById("PrecioDos").value;
   precioDos = parseInt (precioDos);
   document.getElementById("PrecioDos").value = precioDos * IVA;
   precioTres = document.getElementById("PrecioTres").value;
   precioTres = parseInt (precioTres);
   document.getElementById("PrecioTres").value = precioTres * IVA;

}