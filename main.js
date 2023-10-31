//Estacion de servicio.
function saludar() {
    let nombre = prompt("¿hola como es tu nombre?")
    alert("Bienvenido, " + nombre)
}
saludar()

const tipoCombustible = prompt("¿Qué combustible vas cargar nafta o gasoil?")
let litros = parseFloat(prompt("¿Cuántos litros vas cargar?"))

const precioNafta = 257.13
const precioGasoil = 491.27

let costoCombustible

if (tipoCombustible.toLowerCase() === "nafta") {
    costoCombustible = precioNafta * litros
} else if (tipoCombustible.toLowerCase() === "gasoil") {
    costoCombustible = precioGasoil * litros
} else {
    alert("No tenemos ese combustible, solo tenemos nafta o gasoil.")
}

alert("El monto final a pagar es de $" + costoCombustible.toFixed(2))

const metodoPago = prompt("¿Cómo vas a pagar en efectivo o con tarjeta?")

let totalAPagar

if (metodoPago.toLowerCase() === "efectivo") {
    const dineroRecibido = parseFloat(prompt("Igrese el dinero"))
    totalAPagar = costoCombustible

    if (dineroRecibido < totalAPagar) {
        alert("Dinero insuficiente.")
    } else {
        const vuelto = dineroRecibido - totalAPagar
        alert("Gracias,  Tu cambio es de $" + vuelto.toFixed(2) + ".")
    }
} else if (metodoPago.toLowerCase() === "tarjeta") {
    totalAPagar = costoCombustible * 1.1
    alert("Gracias, El total a pagar con tarjeta es de $" + totalAPagar.toFixed(2) + ".")
} else {
    alert("Método de pago no válido.")
}
