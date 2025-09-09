
let totalCarrito = 0; 


const resultadoElemento = document.getElementById("total-carrito");
const botones = document.querySelectorAll('.producto button');

function agregarAlCarrito(precioProducto) {
   
    totalCarrito = totalCarrito + precioProducto;
    
   
    resultadoElemento.innerText = "Total: $" + totalCarrito.toLocaleString('es-CL');
}


for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        
        const precioTexto = this.parentNode.querySelector('.precio').innerText;
       
        const precio = parseFloat(precioTexto.replace('$', '').replace(/\./g, ''));
        
       
        agregarAlCarrito(precio);
    };
}
