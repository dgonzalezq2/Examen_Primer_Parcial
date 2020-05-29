const argv = require("./config/yargs").argv;
const colors = require("colors");

let dato;

const menu = () => {

    let comando = argv._[0];
    switch (comando) {
        case "mostrar":

            console.log("Personas que usan internet (% de la poblacion)");
            // console.log(`Pais: ${argv.pais}`);
            // console.log(`Año: ${argv.anio}`);

            break;

        default:
            console.log("El comando no es válido");
    }

};