const argv = require("./config/yargs").argv;
const obtenerData = require("./buscador/buscar").obtenerData;
const colors = require("colors");

let dato;

const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "mostrar":

            console.log("-----------------------------------------------------".rainbow);
            console.log("Personas que usan internet (% de la poblacion)".blue);
            console.log(`Pais: ${argv.pais}`.green);
            console.log(`Año: ${argv.anio}`.red);
            console.log(`Valor: ${dato.porcentaje}`.yellow);
        case "guardar":
            break;

        default:
            console.log("El comando no es válido");
            break;
    }
};



const ejecutar = async() => {
    dato = await obtenerData(argv.pais, argv.anio.toString(), argv.archivo);
    menu();
    return dato;
};

ejecutar()
    .then()
    .catch((err) => {
        console.log(colors.red(err));
    });