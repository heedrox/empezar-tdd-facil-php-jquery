function enviarFormulario() {
    if ($('#email').val() == "") {
        $('#mensajeValidacion').show();
        $('#textoValidacion').html("email");
    } else if ($('#fechaNacimiento').val() == "") {
        $('#mensajeValidacion').show();
        $('#textoValidacion').html("fechaNacimiento");
    } else {
        $('#mensajeValidacion').hide();
    }
}