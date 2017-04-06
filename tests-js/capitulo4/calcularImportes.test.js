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
        expect(salida[0].id).toBe(1);
        expect(salida[0].title).toBe("Maniac Mansion Videojuego");
        expect(salida[0].ctd).toBe(5);
        expect(salida[0].pvp).toBe(40);
        expect(salida[0].importe).toBe(200);

    });

    it("calcula el importe con impuestos para un producto como el importe para un producto * 1,21", function() {
        //GIVEN
        var entrada = [ { id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40 } ];

        //WHEN
        var salida = calcularImportes(entrada);

        //THEN
        expect(salida[0].importeImp).toBe(242);
    })

    it("calcula el importe total en la última línea, con id 0", function() {
        //GIVEN
        var entrada = [ { id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40 } ];

        //WHEN
        var salida = calcularImportes(entrada);

        //THEN
        expect(salida[1]).toEqual( { id: 0, importe: 200, importeImp: 242 });
    });

    it("calcula los importes para varios productos", function() {
        //GIVEN
        var entrada = [
            { id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40 },
            { id: 2, title: "Consola XBOX Zero", ctd: 1, pvp: 300 },
            { id: 3, title: "Prison Break Temporada 76", ctd: 2, pvp: 15 }
            ];

        //WHEN
        var salida = calcularImportes(entrada);

        //THEN
        expect(salida).toEqual(
            [
                { id: 1, title: "Maniac Mansion Videojuego", ctd: 5, pvp: 40, importe: 200, importeImp: 242  },
                { id: 2, title: "Consola XBOX Zero", ctd: 1, pvp: 300, importe: 300, importeImp: 363 },
                { id: 3, title: "Prison Break Temporada 76", ctd: 2, pvp: 15, importe: 30, importeImp: 36.30 },
                { id: 0, importe: 530, importeImp: 641.30 }
            ] );
    });
});