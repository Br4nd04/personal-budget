let movimientos = [];

function registrarMovimiento() {
    console.log("Registro de Gastos\n-----------------------");
    while (true) {
        let nombre = prompt("Nombre del movimiento:");
        if (!nombre.trim()) {
            console.log("Error: El nombre no puede estar vacío.");
            continue;
        }

        let tipo = prompt("Tipo (Ingreso/Egreso):").toLowerCase();
        if (tipo !== "ingreso" && tipo !== "egreso") {
            console.log("Error: El tipo debe ser 'Ingreso' o 'Egreso'.");
            continue;
        }

        let monto = parseFloat(prompt("Monto:"));
        if (isNaN(monto) || monto <= 0) {
            console.log("Error: El monto debe ser un número mayor que cero.");
            continue;
        }

        movimientos.push({ nombre, tipo, monto });
        console.log(`\nNombre del movimiento: ${nombre}`);
        console.log(`Tipo: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
        console.log(`Monto: $${monto.toFixed(2)}\n`);

        let continuar = prompt("¿Registrar otro movimiento? (si/no):").toLowerCase();
        if (continuar !== "si") break;
    }
}

function calcularTotalSaldo() {
    let saldo = 0;
    for (let mov of movimientos) {
        saldo += mov.tipo === "ingreso" ? mov.monto : -mov.monto;
    }
    return saldo;
}

function mostrarResumen() {
    console.log("\nResumen Final\n-----------------------");
    console.log(`Total de movimientos registrados: ${movimientos.length}`);
    console.log(`Saldo total: $${calcularTotalSaldo().toFixed(2)}`);
    
    let resumenPorTipo = { ingreso: 0, egreso: 0 };
    for (let mov of movimientos) {
        resumenPorTipo[mov.tipo] += mov.monto;
    }
    
    console.log("\nDesglose por tipo:");
    if (resumenPorTipo.egreso > 0) {
        console.log(`- Egresos: $${resumenPorTipo.egreso.toFixed(2)}`);
    }
    if (resumenPorTipo.ingreso > 0) {
        console.log(`- Ingresos: $${resumenPorTipo.ingreso.toFixed(2)}`);
    }
}

// Ejecución del programa
registrarMovimiento();
mostrarResumen();