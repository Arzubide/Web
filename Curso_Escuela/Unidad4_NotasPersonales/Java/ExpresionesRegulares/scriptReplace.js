function palabra(){
    var patron = /alegre|feliz|contento/;
    var cambiar = "triste";
    var textoIngresado = document.forms.datos.palabra.value;
    resultadoPatron = textoIngresado.replace(patron,cambiar);
    document.forms.datos.resultado.value = resultadoPatron;
}