function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;
edad = parseInt (edad);

if (edad > "13" && edad < "18")
{
}

else
{
    alert ("Usted no es adolescente");
}
}//FIN DE LA FUNCIÓN