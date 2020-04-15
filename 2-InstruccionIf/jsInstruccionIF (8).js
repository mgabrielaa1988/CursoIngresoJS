function Mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad = document.getElementById("edad").value;
edad = parseInt (edad);

estadoCivil = document.getElementById("estadoCivil").value;

if (estadoCivil == "Soltero" && edad >= "18")
{
    alert ("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN