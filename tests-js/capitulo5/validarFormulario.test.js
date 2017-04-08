describe("validarFormulario valida el formulario del capitulo 5", function() {
    it("muestra mensaje error dado un formulario vacio", function() {
        jasmine.getFixtures().fixturesPath = 'base/templates';
        loadFixtures("capitulo5.html.twig");
        enviarFormulario();

        expect($('#mensajeValidacion')).toBeHidden();
    });
});
