# REGISTRO DE GASTOS

## Descripción 

Este programa permite registrar y visualizar movimientos financieros, categorizándolos en ingresos y egresos. Los usuarios pueden ingresar múltiples movimientos, ver un resumen del saldo total y un desglose por tipo de movimiento.

## Funcionalidad

1. Registro de movimientos: Solicita al usuario ingresar un nombre, tipo (Ingreso/Egreso) y monto del movimiento.

2. Validaciones: Se asegura de que los datos sean correctos (nombre no vacío, tipo válido y monto mayor que cero).

3. Cálculo del saldo: Determina el saldo total sumando los ingresos y restando los egresos.

4. Resumen final: Muestra la cantidad total de movimientos, el saldo y un desglose de ingresos y egresos.

## Funciones creadas

+ registrarMovimiento(): Solicita, valida y almacena los movimientos ingresados por el usuario.

+ calcularTotalSaldo(): Calcula el saldo total sumando ingresos y restando egresos.

+ mostrarResumen(): Presenta un resumen de los movimientos registrados, incluyendo saldo total y desglose por tipo.

## Reflexión sobre estructuras de control

El uso de bucles while permitió repetir el registro de movimientos hasta que el usuario decidiera salir. Las estructuras condicionales if/else ayudaron a validar los datos ingresados y evitar errores en el registro. Finalmente, el uso de bucles for facilitó la iteración sobre los movimientos para calcular totales y mostrar el resumen de manera eficiente.