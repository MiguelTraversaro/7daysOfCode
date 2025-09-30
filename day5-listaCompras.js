let listaCompras = [];
let pregunta;
let quitar;

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
    quitar = prompt("¿Desea quitar algún artículo? (s/n)").toLowerCase();
    if (quitar === "s") {
        let nombresDeItems = listaCompras.map(item => `- ${item.nombre} (Cat: ${item.categoria})`).join('\n');
        let mensaje = "Lista actual de ítems:\n" + nombresDeItems +
            "\n\n¿Qué elemento quieres eliminar de la lista? (Escribe el nombre exacto):";
        let itemAEliminar = prompt(mensaje);
        let indice = listaCompras.findIndex(item => item.nombre === itemAEliminar);
        if (indice !== -1) {
            listaCompras.splice(indice, 1);
            alert(`${itemAEliminar} ha sido eliminado de la lista.`);
        } else {
            alert(`${itemAEliminar} no se encontró en la lista.`);
        }
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

    if (Object.keys(itemsPorCategoria).length > 0) {
        alert(mensaje);
    } else {
        alert("No se agregaron artículos a la lista de compras.");
    }
}