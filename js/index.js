let continuar = true

const mensajeInicial = "Ingresa el código del servicio a consultar: \n" +
    "a) Online training \n" +
    "b) Outdoor training \n" +
    "c) Healthy Fit Program \n" +
    "d) Entrenamiento Personalizado \n"

function aranceles() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d") {
        alert("⛔ El código ingresado no es valido")
    } else {
        let promoamigos = confirm("¿Vendrias con un compañer@ a entrenar?")
        if (promoamigos) {
            descuento = 0.75
        } else {
            descuento = 1
        }
        switch (resultado) {
            case "a":
                valor = 5000 * descuento
                alert("El entrenamiento Online tiene un valor de $ " + valor + " al mes.")
                break
            case "b":
                valor = 7000 * descuento
                alert("El entrenamiento Outdoor tiene un valor de $ " + valor + " al mes.")
                break
            case "c":
                valor = 10000 * descuento
                alert("El Programa de entrenamiento tiene un valor de $ " + valor + " el trimestre.")
                break
            case "d":
                alert("Para mas información sobre la disponibilidad y aranceles, comunicate por whatsapp!!")
                break
            default:
        }
    }

}

function horarios() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d") {
        alert("⛔ El código ingresado no es valido")
    } else {
        switch (resultado) {
            case "a":
                alert("Online = Martes y Jueves 20hs")
                break
            case "b":
                alert("Outdoor = Lunes y miercoles 19hs")
                break
            case "c":
                alert("Lunes, Miercoles y Viernes de 08 a 12 hs")
                break
            case "d":
                alert("Para mas información sobre la disponibilidad y aranceles, comunicate por whatsapp")
                break
            default:
        }
    }

}

function preguntarHorarios() {
    while (continuar) {
        horarios()
        continuar = confirm("¿Deseas conocer los horarios de otra disciplina?")
    }
    alert(" Gracias por tu visita! 📲 Escribenos al 11 1234 5678")
}

function preguntarAranceles() {
    while (continuar) {
        aranceles()
        continuar = confirm("¿Deseas conocer los horarios de otra disciplina?")
    }
    alert(" Gracias por tu visita! 📲 Escribenos al 11 1234 5678")
}