var totalCarrito = 0; 
var resultadoElemento = document.getElementById("total-carrito");


var botones = document.querySelectorAll('.producto button');
for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {

        var precioTexto = this.parentNode.querySelector('.precio').innerText;

        var precio = parseFloat(precioTexto.replace('$', '').replace(/\./g, ''));
        

        agregarAlCarrito(precio);
    };
}


function agregarAlCarrito(precioProducto) {
    totalCarrito += precioProducto;
    resultadoElemento.innerText = "Total: $" + totalCarrito.toLocaleString('es-CL');
}