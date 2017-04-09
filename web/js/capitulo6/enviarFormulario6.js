function enviarFormulario6() {
    var parametros = construirParametros();
    RemoteService.post("api/capitulo6", parametros).then(escribirEnResultadoServidor);

    function construirParametros() {
        return {
            email: $('#email').val(),
            dateBirth: obtenerFechaNacimiento(),
            package: obtenerPackage(),
            monthPayment: obtenerPayment()
        };
    }

    function obtenerFechaNacimiento() {
        var fecha = new Date($('#fechaNacimiento').val());
        return fecha.getFullYear() + "" + zpad(fecha.getMonth() + 1) + zpad(fecha.getDate());

        function zpad(d) {
            return (d < 10) ? ('0' + d) : d;
        }
    }

    function obtenerPackage() {
        return $('#paquete').val() == "BASICO" ? 1 : 2;
    }

    function obtenerPayment() {
        var COSTES = {
            "BASICO": 50,
            "AVANZADO": 200
        };

        var numMensualidades = $('#numMensualidades').val();
        var paquete = $('#paquete').val();
        return COSTES[paquete] / numMensualidades;
    }

    function escribirEnResultadoServidor(resultado) {
        $('#resultadoServidor').html(resultado);
    }
}