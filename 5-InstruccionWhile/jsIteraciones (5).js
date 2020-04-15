function Mostrar()
{

    var sexo;
    sexo = prompt ("Ingrese f para femenino ó m para masculino.");

    while (sexo != "f" && sexo != "m")
    {
       sexo = prompt ("Ingrese f para femenino ó m para masculino");
    }   

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN