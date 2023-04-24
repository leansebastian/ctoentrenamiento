const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const carrito = []

function filtrarServicios(valor) {
    let resultado = servicios.filter(servicio => servicio.tipo.toLowerCase().includes(valor.toLowerCase()))
    if (resultado.length > 0) {
        cargarServicios(resultado)
    }
}

function retornoCardHTML(sesion) {

    return `<div class="caja">
            <div class="caja-imagen">${sesion.imagen}</div>
            <div class="caja-nombre">${sesion.tipo}</div>
            <div class="caja-nombre">${sesion.clase}</div>
            <div class="caja-abono">${sesion.precio}</div>
            <div class="caja-button">
                <button class="button button-outline button-add" id="${sesion.id}" title="Clic para agregar al carrito"> AGREGAR</button></div>
        </div>`
}

function cargarServicios(array) {
    container.innerHTML = ""
    array.forEach(sesion => {
        container.innerHTML += retornoCardHTML(sesion)
    })
    activarClickEnBotones()
}

inputSearch.addEventListener("keyup", (e) => {
    filtrarServicios(e.target.value)

})


function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline.button-add")
    for (const boton of botones) {
        boton.addEventListener("click", () => {
            let resultado = servicios.find(sesion => sesion.id === parseInt(boton.id))
            carrito.push(resultado)
            console.table(carrito)
            guardarCarrito()
        })
    }
}


function guardarCarrito() {
    localStorage.setItem("carritoServicios", JSON.stringify(carrito))

}

function recuperarCarrito() {
    const carritoTemporal = JSON.parse(localStorage.getItem("carritoServicios")) || []
    carrito.push(...carritoTemporal)

}

recuperarCarrito()

cargarServicios(servicios)