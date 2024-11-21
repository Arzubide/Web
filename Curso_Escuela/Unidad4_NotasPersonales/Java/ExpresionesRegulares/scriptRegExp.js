/*BANDERAS
g Explora la cadena completa.
i Cualquier carácter sin precisar mayúsculas o minúsculas.
m Permite usar varios ^ y $ en la definición del patrón.
s Incluye un salto de línea en el carácter especial punto (.).
x Ignora los espacios en el patrón.
*/

function patron(){
    /*Mediante expresiones regulares se verifica si el correo contiene un arroba*/
    let CadenaUsuario = document.getElementById("correo").value;
    var arroba = new RegExp("@","g");
    if (arroba.test(CadenaUsuario)) {
        document.getElementById("resultado").value = "Tu correo contiene un arroba"
    }else{
        document.getElementById("resultado").value = "Tu correo no contiene un arroba"
    }
}

function validacionCorreo(){
    /* 
        Funcion que valida que el correo ingresado por el estudiante es de dominio estudiante
    */
    let correoIngresado = document.getElementById("correo").value;
    var validacionArroba = new RegExp("@","g");
    var validacionAlumno = new RegExp("alumno.com$","g")
    if (validacionArroba.test(correoIngresado)) {
        if (validacionAlumno.test(correoIngresado)) {
            document.getElementById("resultado").value = "Tu correo es valido como alumno"
        }else{
            document.getElementById("resultado").value = "Tu correo no es dominio de estudiante"
        }
    }else{
        document.getElementById("resultado").value = "tu correo no es valido"
    }
}