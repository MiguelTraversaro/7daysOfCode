const numero = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
let numUsuario;
let intentos = 0;

while (intentos < 3) {
    let palabra = (3 - intentos == 1) ? "intento" : "intentos";
    numUsuario = parseInt(prompt(`Adivina el número entre 1 y 10. Tienes ${3 - intentos} ${palabra}.`));

    // Validar entrada
    if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
        continue; // No cuenta como intento
    }

    intentos++;
    
    if (numUsuario == numero) {
        alert("¡Felicidades! Has adivinado el número.");
        break;
    } else if (intentos == 3) {
        alert(`Lo siento, has agotado tus intentos. El número era ${numero}.`);
    } else if (numUsuario > numero) {
        alert("El número es menor. Intenta de nuevo.");
    } else {
        alert("El número es mayor. Intenta de nuevo.");
    }
}