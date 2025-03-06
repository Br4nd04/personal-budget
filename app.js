const actividades = [];

function registrarActividad() {
    console.log("Registro de Actividades");
    console.log("-----------------------");
    
    const nombre = prompt("Nombre de la actividad:");
    const duracion = parseInt(prompt("Duración (minutos):"), 10);
    
    if (!nombre || duracion <= 0 || isNaN(duracion)) {
        console.log("Error: Nombre inválido o duración incorrecta.");
        return;
    }
    
    actividades.push({ nombre, duracion});
    console.log(`Actividad registrada: ${nombre}`)
    console.log(`Duración (minutos): ${duracion}`)
}

function calcularTiempoTotal() {
    let total = 0;
    for (const actividad of actividades) {
        total += actividad.duracion;
    }
    return total;
}

function mostrarResumen() {
    console.log("\nResumen Final");
    console.log("-----------------------");
    console.log(`Total de actividades: ${actividades.length}`);
    console.log(`Tiempo total: ${calcularTiempoTotal()} minutos`);
    
}

function iniciarRegistro() {
    let continuar = true;
    while (continuar) {
        registrarActividad();
        continuar = confirm("¿Registrar otra actividad?");
    }
    mostrarResumen();
}

iniciarRegistro();