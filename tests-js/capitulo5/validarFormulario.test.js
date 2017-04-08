describe("validarFormulario valida el formulario del capitulo 5", function() {
    it("muestra mensaje error dado un formulario vacio", function() {
        enviarFormulario();

        $('#mensajeValidacion').not.toBeHidden();
    });
});
