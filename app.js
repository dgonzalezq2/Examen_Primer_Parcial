const argv = require("./config/yargs").argv;
const colors = require("colors");

let dato;

let comando = argv._[0];
switch (comando) {
    case "mostrar":

        console.log("Personas que usan internet (% de la poblacion)");
        console.log(`Pais: ${argv.pais}`);
        console.log(`Año: ${argv.anio}`);

        break;

    case "guardar":
        break;

    default:
        console.log("El comando no es válido");
        break;
}

const ejecutar = async() => {
    data = await obtenerData(argv.country, argv.year.toString(), argv.file);
    menu();
    return data;
};