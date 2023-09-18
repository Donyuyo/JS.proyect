//Simulador interactivo

//Stock de los productos de mi pagina de ventas

function consultarStock() {
    const inventario = {
    polera1: 10,
    polera2: 5,
    polera3: 8,
    poleron1: 3,
    poleron2: 7,
    poleron3: 17,
    mochila: 21,
    juegodecartas: 2,
    botella: 9
    };
    let continuar = "si";

    while (continuar === "si") {
        alert("Que producto deseas saber si tenemos en stock?");
        let producto = prompt("Ingresa el nombre del producto:");

        if (inventario.hasOwnProperty(producto)) {
            alert(`El producto ${producto} esta en stock con ${inventario[producto]} unidades disponibles.`);
        } else {
        alert(`Lo siento, el producto ${producto} no esta en stock en este momento.`);
        }

    continuar = prompt("Quieres saber de otro producto en stock? (si/no)").toLowerCase();
    }
}

consultarStock();