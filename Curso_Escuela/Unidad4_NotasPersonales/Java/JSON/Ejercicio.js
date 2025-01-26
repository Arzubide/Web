let empleado = {
    nombre: "Gael",
    apellido: "Arzubide",
    numEmpleado: 49837,
    uas: [
        { materia: "Economia", horas: 7 },
        { materia: "Teoria de la computaion", horas: 9 },
        { materia: "Ecuaciones", horas: 8 }
    ],
    academia: {
        nombre: "ESCOM",
        turno: "vespertino"
    }
};

console.log(
    `}e docente ${empleado.nombre} ${empleado.apellido}, tiene ${empleado.numEmpleado} como número de empleado e imparte "${empleado.uas.length}" clases en el turno "${empleado.academia.turno}".`
);
