botonComprar.addEventListener('click', () => {
    const nombreCliente = document.getElementById('nombre-cliente').value;
    if (totalCarrito > 0 && nombreCliente.trim() !== "") {

        window.location.href = 'seguimiento.html';
    } else {
        alert('El carrito está vacío o faltan datos.');
    }
});