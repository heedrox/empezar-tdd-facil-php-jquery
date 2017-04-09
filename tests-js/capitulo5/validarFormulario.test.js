describe("validarFormulario valida el formulario del capitulo 5", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/templates';
        loadFixtures("capitulo5.html.twig");
    });

    describe("validación correcta", function() {
        it("no muestra mensaje error si todos los campos están bien rellenados", function() {
            dadoUnFormularioRellenadoCorrectamente();

            enviarFormulario();

            expect($('#mensajeValidacion')).toBeHidden();
        });
    });

    describe("validación incorrecta", function() {
        var camposQueCausanValidacionIncorrecta = [ "email", "fechaNacimiento"];

        camposQueCausanValidacionIncorrecta.forEach(function(campo) {
            it("muestra mensaje error si "+campo+" no rellenado", function() {
                dadoUnFormularioRellenadoCorrectamente();
                $('#'+campo).val('');

                enviarFormulario();

                expect($('#mensajeValidacion')).not.toBeHidden();
                expect($('#textoValidacion').html()).toBe(campo);
            });
        });

    });
});

function dadoUnFormularioRellenadoCorrectamente() {
    $('#email').val("unemail@cualquiera.com");
    $('#fechaNacimiento').val(new Date());
}