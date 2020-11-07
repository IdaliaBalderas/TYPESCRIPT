(function(){

    function getEdad() {
        return 100 + 100 + 300;
    }

    const nombre   = 'Idalia';
    const apellido = 'Balderas';
    const edad     = 21;

    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " )";
    const salida = `
        ${ nombre }
        ${ apellido }
        ( ${ getEdad() } )`;
    // Fernando Herrera (Edad: 33)



    console.log(salida);

    

})();



