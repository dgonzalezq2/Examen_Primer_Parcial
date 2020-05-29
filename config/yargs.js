let mostrar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Archivo CSV con datos a procesar '
    },
    pais: {
        default: 'ECU',
        alias: 'c',
        desc: ' Código del país que se requiere información'
    },
    anio: {
        default: 1960,
        alias: 'y',
        desc: 'Año que del que se busca información'
    }
}

let guardar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        default: 'ECU',
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código'
    },
    anio: {
        default: 1960,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    },
}

const argv = require('yargs')
    .command('mostrar', 'Este comando publicará el % de personas que usan internet de un determinado país en un determinado año', mostrar)
    .command('guardar', 'Este comando almacenará los resultados de la consulta en un archivo .txt con el código del país y el año de la consulta', guardar)
    .help().argv;

module.exports = {
    argv
}