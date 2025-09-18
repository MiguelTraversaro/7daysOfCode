// Day 3

let lenguaje = "";
let respuesta = "";
let numero = "";
let tecnologias = [];
let ok = "ok";

// Preguntar área y lenguaje
while (respuesta !== "Front-End" && respuesta !== "Back-End") {
    respuesta = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? Responde con Front-End o Back-End.");
    if (respuesta === "Front-End") {
        while (lenguaje !== "React" && lenguaje !== "Vue") {
            lenguaje = prompt("¿Quieres aprender React o Vue? Responde con React o Vue.");
            if (lenguaje !== "React" && lenguaje !== "Vue") {
                alert("Por favor, responde con React o Vue.");
            }
        }
    } else if (respuesta === "Back-End") {
        while (lenguaje !== "C#" && lenguaje !== "Java") {
            lenguaje = prompt("¿Quieres aprender C# o Java? Responde con C# o Java.");
            if (lenguaje !== "C#" && lenguaje !== "Java") {
                alert("Por favor, responde con C# o Java.");
            }
        }
    } else {
        alert("Por favor, responde con Front-End o Back-End.");
    }
}

// Preguntar especialización o Fullstack
while (numero !== "1" && numero !== "2") {
    numero = prompt("¿Quieres seguir especializándote en el área elegida (1) o convertirte en Fullstack (2)? Responde con el número correspondiente.");
    if (numero === "1") {
        alert(`¡Excelente! La especialización en ${lenguaje} te permitirá profundizar en tus conocimientos en ${respuesta}.`);
    } else if (numero === "2") {
        alert(`¡Genial! Ser Fullstack te dará una visión completa del desarrollo, no solo de ${respuesta}.`);
    } else {
        alert("Por favor, responde con 1 para especializarte o 2 para Fullstack.");
    }
}
 
// Preguntar tecnologías adicionales
while (ok === "ok") {
    let tecnologia = prompt("¿En qué tecnologías te gustaría especializarte o conocer? Responde con el nombre de la tecnología.");
    if (tecnologia !== "") {
        tecnologias.push(tecnologia);
        alert(`${tecnologia} es una excelente elección para expandir tus habilidades.`);
    }
    ok = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde con ok para continuar o cualquier otra cosa para finalizar.");
}