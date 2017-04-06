function obtenerSalida() {
    var entrada = JSON.parse($('#entrada').val());
    $('#salida').val(JSON.stringify(calcularImportes(entrada)));
}

function calcularImportes(entrada) {
    var entradaConImportes = entrada.map(aniadirImporte);
    var entradaConImportesImpuestos = entradaConImportes.map(aniadirImporteImpuestos);
    entradaConImportesImpuestos.push(calcularRegistroTotal(entradaConImportesImpuestos));
    return entradaConImportesImpuestos;

    function aniadirImporte(producto) {
        producto.importe = producto.ctd * producto.pvp;
        return producto;
    }

    function aniadirImporteImpuestos(producto) {
        producto.importeImp = producto.importe * 1.21;
        return producto;
    }
    function calcularRegistroTotal(productos) {
        var sumaProductos = productos.reduce(suma, { importe: 0, importeImp: 0 });
        return { id: 0, importe: sumaProductos.importe, importeImp: sumaProductos.importeImp };

        function suma(a, b) {
            return { importe: a.importe + b.importe, importeImp: a.importeImp + b.importeImp };
        }
    }

}

