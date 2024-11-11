function suma(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let suma = parseInt(numero1) + parseInt(numero2);
    
    document.getElementById("resultado").innerHTML = "El resultado de la suma es:  " + suma
}

function multiplicacion(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let multiplicacion = parseInt(numero1) * parseInt(numero2);
    document.getElementById("resultado").innerHTML = "El resultado de la multiplicacion es:  " + multiplicacion

}

function division(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if (numero2 != 0){
        let division = parseInt(numero1)/parseInt(numero2);
        document.getElementById("resultado").innerHTML = "El resultado de la division es:  " + division

    }
    else{
        document.getElementById("resultado").innerHTML = "Error al hacer la division, el numero 2 tiene que ser diferente a 0"

    }
}
        

function resta(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resta = parseInt(numero1) - parseInt(numero2);
    document.getElementById("resultado").innerHTML = "El resultado de la resta es:  " + resta

}


