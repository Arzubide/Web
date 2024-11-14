function arroba(){
    var correoIngresado = document.forms.datos.correo.value;
    var coincidencia = correoIngresado.match(/@/);
    if(coincidencia == '@'){
        document.forms.datos.resultado.value = "Tu respuesta es correcta"
    }else{
        document.forms.datos.resultado.value = "Tus datos son incorrectos, no contiene arroba"
    }
}