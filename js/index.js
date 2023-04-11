const carrito = []

const servicios = [{ imagen: '🍀', codigo: 1, tipo: 'Outdoor training', clase: '(pack 8 clases)', valor: 5000 },
{ imagen: '🖥️', codigo: 2, tipo: 'Online training', clase: '(pack 8 clases)', valor: 6000 },
{ imagen: '🥗', codigo: 3, tipo: 'Healthy-nutri', clase: '(plan nutricional)', valor: 4500 },
{ imagen: '📜', codigo: 4, tipo: 'Healthy-rutina', clase: '(plan de entrenamiento)', valor: 6500 },
{ imagen: '🏋️', codigo: 5, tipo: 'Programa Healthy Fit', clase: '(programa de 90 dias)', valor: 20000 },
{ imagen: '🌍', codigo: 6, tipo: 'Personalizado-Online', clase: '(pack 4 clases)', valor: 10000 },
{ imagen: '🏡', codigo: 7, tipo: 'Personalizado-Domicilio', clase: '(pack 4 clases)', valor: 12000 }]

const mensajeInicial = "Selecciona el servicio por el código numérico:"



function buscarServicio(codigo) {
    let resultado = servicios.find((servicio) => servicio.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío.")
        return
    }

    const shopping = new Compra(carrito)
    alert('El costo total es de: $ ' + shopping.obtenerSubtotal())

    let respuesta = confirm("¿Eres soci@ activo?" + "\n ✨ Los socios de nuestro gym tienen un 10% off ✨")
    if (respuesta === true) {
        alert('El valor a abonar seria de: $ ' + (shopping.obtenerSubtotal() * 0.90))
    }

    let respuestaDos = confirm("¿Deseas confirmar tu pago?")
    if (respuestaDos === true) {
        alert('✅ Confirmamos tu pago' + "\n Muchas gracias por confiar en nosotros 💪")
        carrito.length = 0
    }
}

function comprar() {
    let codigo = prompt(mensajeInicial)
    if (!parseInt(codigo)) {
        alert("Error en el código ingresado.")
        let respuesta = confirm("¿Deseas intentar nuevamente?")
        if (respuesta === true) {
            comprar()
        }
        return
    }

    let servicioElegido = buscarServicio(codigo)
    if (servicioElegido === undefined) {
        alert("Codigo ingresado invalido.")
        return
    }

    alert(servicioElegido.imagen + ' ' + servicioElegido.tipo + ' ' + servicioElegido.clase + ' ' + ' - ha sido agregado al carrito.')
    carrito.push(servicioElegido)

    let respuesta = confirm("¿Deseas agregar otro servicio?")
    if (respuesta === true) {
        comprar()
    } else {
        finalizarCompra()
    }
}




