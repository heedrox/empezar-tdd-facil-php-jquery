describe("enviarformulario6 hace una llamada ajax a api/capitulo6 con los datos transformados", function() {
    it("llama al servidor cuando se pulsa enviar", function() {
        spyOn(RemoteService, "post");

        enviarFormulario6();

        expect(RemoteService.post).toHaveBeenCalled();
    });
});