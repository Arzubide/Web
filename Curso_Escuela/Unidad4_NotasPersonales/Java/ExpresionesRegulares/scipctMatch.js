function arroba(){
    var correoIngresado = document.forms.datos.correo.value;
    var coincidencia = correoIngresado.match(/@/);
    if(coincidencia == '@'){
        document.forms.datos.resultado.value = "Tu respuesta es correcta"
    }else{
        document.forms.datos.resultado.value = "Tus datos son incorrectos, no contiene arroba"
    }
}


//Version con id's
function arrobaa(){
    let correoIngresado = document.getElementById("correo").value;
    var arroba = correoIngresado.match(/@/);
    if (arroba !== null) {
        document.getElementById("resultado").value = "Tu correo tiene arroba";
    }else{
        document.getElementById("resultado").value = "Tu correo no tiene arroba";
    }
}

