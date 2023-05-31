const carritoProductos = []
const container = document.querySelector(".container")
const totalCarrito = document.querySelector("span")
const inputBuscar = document.querySelector("#inputSearch")
const carro =document.querySelector("btn-salida")
const servicios=[]
const btnCheckout = document.querySelector("div.btn-checkout")
const URL = 'js/servicios.json'


fetch(URL)
        .then((respuesta)=> respuesta.json())
        .then((data)=> servicios.push(...data))
        .then(()=> cargarProductos(servicios))


function retornarCardHTML(servicio) {

    return `<div class="caja">
            <div class="caja-imagen">${servicio.imagen}</div>
            <div class="caja-nombre">${servicio.tipo}</div>
            <div class="caja-nombre">${servicio.clase}</div>
            <div class="caja-abono">${servicio.precio}</div>
            <div class="caja-button">
                <button class="button button-outline button-add" id="${servicio.id}" title="Clic para agregar al carrito"> AGREGAR</button></div>
        </div>`
}

function mostrarCardError() {
    container.innerHTML = `<div class="card-error">
                               <h1>🤦🏻‍♂️</h1>
                               <h2>Error!</h2>
                               <h3>No pudimos obtener los productos a mostrar.</h3>
                               <h4>Intenta de nuevo en unos minutos...</h4>
                           </div>`
}

function actualizarTotalServicios() {
    totalCarrito.textContent = carritoProductos.length
}

actualizarTotalServicios()

function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline.button-add")

    if (botones !== null) {
        for (const boton of botones) {
            boton.addEventListener("click", (e) => {

                let producto = servicios.find((servicio) => servicio.id === parseInt(e.target.id))
                carritoProductos.push(producto)
                actualizarTotalServicios()
                guardarCarrito()
                Toastify({
                    text: "Servicio agregado a carrito",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #50b08b, #36c23d)",
                    },
                }).showToast()        
               finalizarCompra()
            })
        }
    }
}



function finalizarCompra() {

    Swal.fire({
        title: '¿Quieres finalizar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Agregar servicios`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Felicitaciones, nos contactaremos a la brevedad')
        } else if (result.isDenied) {
          Swal.fire('Conocé todos nuestros servicios')
        }
      })
    }


function cargarProductos(array) {
    container.innerHTML = ""
    array.forEach((servicio) => {
        container.innerHTML += retornarCardHTML(servicio)
    })
    activarClickEnBotones()
}

servicios.length > 0 ? cargarProductos(servicios) : mostrarCardError()

function filtrarProductos() {
    let resultado = servicios.filter((servicio) => servicio.tipo.toLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
    resultado !== [] && cargarProductos(resultado)

}

inputSearch.addEventListener("keyup", (e) => {
    filtrarProductos(e.target.value)
})

function guardarCarrito() {
    localStorage.setItem("carritoServicios", JSON.stringify(carritoProductos))
}

function recuperarCarrito() {
    const carritoTemporal = JSON.parse(localStorage.getItem("carritoServicios")) || []
    carritoProductos.push(...carritoTemporal)
}

servicios.length > 0 ? cargarProductos(servicios) : mostrarCardError()

function filtrarProductos() {
    let resultado = servicios.filter((servicio) => servicio.tipo.toLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
    resultado !== [] && cargarProductos(resultado)
}

inputBuscar.addEventListener("search", filtrarProductos)

recuperarCarrito()

