function palabra(){
    var patron = /alegre|feliz|contento/;
    var cambiar = "triste";
    var textoIngresado = document.forms.datos.palabra.value;
    resultadoPatron = textoIngresado.replace(patron,cambiar);
    document.forms.datos.resultado.value = resultadoPatron;
}


function feliz(){
    let PalabraUsu = document.getElementById("palabra").value;
    var patron = /alegre|feliz|contento/g; //agregamos la bandera para que busque en toda la cadena
    var cambio = "triste";
    resultado = PalabraUsu.replace(patron,cambio);
    document.getElementById("resultado").value = resultado;
}