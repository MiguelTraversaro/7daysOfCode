let listaCompras = [];
let pregunta;

do {
    pregunta = prompt("¿Desea agregar un artículo? (s/n)").toLowerCase();
    if (pregunta === "s") {
        let item = {
            nombre: prompt("Ingrese el nombre del artículo:"),
            categoria: prompt("Ingrese la categoria:"),
        }
        listaCompras.push(item);
    } else if (pregunta === "n") {
        agrupar();
    } else {
        alert("Respuesta no válida. Por favor, responda 's' o 'n'.");
    }
} while (pregunta === "s" || (pregunta !== "n" && pregunta !== null));

function agrupar() {
    let itemsPorCategoria = listaCompras.reduce((acumulador, itemActual) => {
        let categoria = itemActual.categoria;
        if (!acumulador[categoria]) {
            acumulador[categoria] = [];
        }
        acumulador[categoria].push(itemActual.nombre);
        return acumulador;
    }, {});

    let mensaje = "Lista de compras agrupada por categoría:\n";
    let categoriasOrdenadas = Object.keys(itemsPorCategoria).sort();

    categoriasOrdenadas.forEach(categoria => {
        let items = itemsPorCategoria[categoria].join(", ");
        mensaje += `${categoria}: ${items}\n`;
    });

    if (Object.keys(itemsPorCategoria).length > 0){
        alert(mensaje);
    } else {
        alert("No se agregaron artículos a la lista de compras.");
    }
}