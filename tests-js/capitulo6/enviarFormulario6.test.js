describe("enviarformulario6 hace una llamada ajax a api/capitulo6 con los datos transformados", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/templates';
        loadFixtures("capitulo6.html.twig");
    });

    it("llama al servidor con la api api/capitulo6", function() {
        spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor(""));

        enviarFormulario6();

        expect(RemoteService.post.calls.first().args[0]).toBe("api/capitulo6");
    });

    it("envía el email", function() {
        spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor(""));
        $('#email').val("unemail@cualquiera.com");

        enviarFormulario6();

        expect(RemoteService.post.calls.first().args[1].email).toBe("unemail@cualquiera.com");
    });

    var fechas = [
        { fechaNacimiento: new Date(1977,03,7), dateBirth: "19770407" },
        { fechaNacimiento: new Date(1977,10,10), dateBirth: "19771110" }
    ];

    using(fechas, function(caso) {
        it("envía la fecha de nacimiento como dateBirth en formato YYYYMMDD para el caso "+caso.dateBirth, function() {
            spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor(""));
            $('#fechaNacimiento').val(caso.fechaNacimiento);


            enviarFormulario6();

            expect(RemoteService.post.calls.first().args[1].dateBirth).toBe(caso.dateBirth);
        });

    });

    var paquetes = [
        { paquete: "BASICO", package: 1 },
        { paquete: "AVANZADO", package: 2 }
    ];

    using(paquetes, function(caso) {
        it("envía el paquete traducido por 1 o 2 - "+caso.package, function() {
            spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor(""));
            $('#paquete').val(caso.paquete);


            enviarFormulario6();

            expect(RemoteService.post.calls.first().args[1].package).toBe(caso.package);
        });

    });

    var COSTES = {
        BASICO: 50,
        AVANZADO: 200
    };

    var mensualidades = [
        { paquete: "BASICO", numMensualidades: "6", monthPayment: COSTES.BASICO/6 },
        { paquete: "BASICO", numMensualidades: "12", monthPayment: COSTES.BASICO/12 },
        { paquete: "AVANZADO", numMensualidades: "10", monthPayment: COSTES.AVANZADO/10 },
        { paquete: "AVANZADO", numMensualidades: "2", monthPayment: COSTES.AVANZADO/2 }
    ];

    using(mensualidades, function(caso) {
        it("envía el pago mensual (monthPayment) - "+caso.monthPayment, function() {
            spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor(""));
            $('#paquete').val(caso.paquete);
            $('#numMensualidades').val(caso.numMensualidades);

            enviarFormulario6();

            expect(RemoteService.post.calls.first().args[1].monthPayment).toBe(caso.monthPayment);
        });

    });

    it("escribe el resultado de la llamada en la capa #resultadoServidor", function() {
        spyOn(RemoteService, "post").and.returnValue(unaPromesaConValor("resultado del servidor"));

        enviarFormulario6();

        expect($('#resultadoServidor').html()).toBe("resultado del servidor");
    });

    function unaPromesaConValor(x) {
        var deferred = $.Deferred();
        deferred.resolve(x);
        return deferred.promise();
    }
});