function enviarFormulario() {
    var camposAValidar = ["email", "fechaNacimiento", "paquete", "numMensualidades", "tarjetaVisa"];
    var objForm = $('form').serializeArray();
    var campoErroneo = validarFormulario(objForm, camposAValidar);
    campoErroneo = campoErroneo!=""?campoErroneo:validarCondiciones($('#condiciones').prop("checked"));
    procesarCampoErroneo(campoErroneo);

    function procesarCampoErroneo(campoErroneo) {
        if (campoErroneo == "") {
            $('#mensajeValidacion').hide();
        } else {
            $('#mensajeValidacion').show();
            $('#textoValidacion').html(campoErroneo);
        }
    }

    function validarCondiciones(ischecked) {
        return ischecked?"":"condiciones";
    }
}

function validarFormulario(objForm, campos) {
    for (var a = 0;a<campos.length;a++) {
        var valorCampo = obtenerValorCampo(objForm, campos[a]);
        if (valorCampo == "") {
            return campos[a];
        }
    }
    return "";

    function obtenerValorCampo(objForm, campo) {
        for (var a=0;a<objForm.length;a++) {
            if (objForm[a].name == campo) return objForm[a].value;
        }
        return "";
    }
}