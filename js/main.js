const CodiCorrecteHash = "$2y$10$qbZleUgT..teDOhX8SDTgeP/nv0u/.B8delwzALVZXoEplhAPoo6K";

$(window).on("load",  async () => {

    $('#login').on("submit", async (event) => {
        event.preventDefault();
        try {
            var codi = $("#codi-acces");
            var bcrypt = dcodeIO.bcrypt;
            if (bcrypt.compareSync(codi.val(), CodiCorrecteHash)) {
                window.location.assign("https://www.fib.upc.edu/ca/estudis/graus/grau-en-ciencia-i-enginyeria-de-dades");
            }
            else {
                alert("Codi incorrecte.");
                window.location.reload();
            }
        } catch (error) {
            console.log(err);
        }
    });
});