function obtenerSalida() {
    var entrada = $('#entrada').val();
    $('#salida').val(calcularImportes(entrada));
}

function calcularImportes(entrada) {
    var entradaConImportes = entrada.map(aniadirImporte);
    entradaConImportes.push({ id: 0, importe: 0, importeImp: 0 });
    return entradaConImportes;

    function aniadirImporte(pedido) {
        pedido.importe = pedido.ctd * pedido.pvp;
        return pedido;
    }
}