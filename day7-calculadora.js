function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "ERROR: División por cero no permitida. 🚫!";
    }
    return a / b;
}

function calculadora() {
    do {
        // 1. Mostrar Menú y Pedir Opción
        const operacion = prompt(
            "Ingrese el número de la operación a realizar:\n" +
            "1- Suma\n" +
            "2- Resta\n" +
            "3- Multiplicación\n" +
            "4- División\n" +
            "5- Salir"
        );

        // 2. Manejo Inmediato de Salida y Cancelación
        if (operacion === '5' || operacion === null) {
            alert("Hasta la próxima. ¡Adiós! 👋");
            break; // Salida limpia del bucle
        }

        // 3. Manejo de Opciones No Válidas
        if (!['1', '2', '3', '4'].includes(operacion)) {
            alert("❌ Opción no válida. Por favor, ingrese un número del 1 al 5.");
            continue; // Volver al menú
        }

        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("⚠️ Error: Por favor, ingrese valores numéricos válidos.");
            continue; // Volver al menú
        }

        let resultado;

        // 5. Estructura Switch y Llamada a Funciones
        switch (operacion) {
            case '1':
                resultado = sumar(num1, num2);
                break;
            case '2':
                resultado = restar(num1, num2);
                break;
            case '3':
                resultado = multiplicar(num1, num2);
                break;
            case '4':
                resultado = dividir(num1, num2);
                break;
        }

        // 6. Imprimir Resultado
        // Verificamos si la función devolvió un string (el mensaje de error)
        if (typeof resultado === 'string' && resultado.startsWith("ERROR")) {
            alert(resultado);
        } else {
            alert(`✨ El resultado es: ${resultado}`);
        }

    } while (true); // Bucle infinito que se rompe solo con 'break'

}

calculadora();


