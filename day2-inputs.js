// Day 2
//TODO- ¿Cuál es tu nombre?
//TODO- ¿Cuántos años tienes?
//TODO- ¿Qué lenguaje de programación estás estudiando?

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

//TODO¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para Sí o 2 para No.`);

if (respuesta == "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Por favor, responde con 1 para Sí o 2 para No.");
}

