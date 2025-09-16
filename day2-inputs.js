// Day 2

// Pregunta hasta obtener una respuesta no vacía
function preguntar(mensaje) {
    let respuesta;
    do {
        respuesta = prompt(mensaje);
    } while (!respuesta);
    return respuesta;
}

let nombre = preguntar("¿Cuál es tu nombre?");
let edad = preguntar("¿Cuál es tu edad?");
let lenguaje = preguntar("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Pregunta hasta obtener una respuesta válida (1 o 2)
let respuesta;
do {
    respuesta = preguntar(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para Sí o 2 para No.`);
    if (respuesta == "1") {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (respuesta == "2") {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Por favor, responde con 1 para Sí o 2 para No.");
    }
} while (respuesta !== "1" && respuesta !== "2");
