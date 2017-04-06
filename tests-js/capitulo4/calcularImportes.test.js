describe("calcularImportes.js calcula los importes por cada producto y agrega un importe total", function() {

    it("calcula el importe cuando no hay líneas", function() {

        //GIVEN
        var entrada = [ ];

        //WHEN
        var salida = calcularImportes(entrada);

        //THEN
        expect(salida).toEqual([{ id: 0, importe: 0, importeImp: 0 }]);
    });

    it("calcula el importe para un producto como cantidad * precio", function() {

        //GIVEN
        var entrada = [ { id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40 } ];

        //WHEN
        var salida = calcularImportes(entrada);

        //THEN
        expect(salida[0]).toEqual({ id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40, importe: 200 });
    });
});