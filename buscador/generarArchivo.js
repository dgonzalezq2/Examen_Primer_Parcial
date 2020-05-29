const fs = require('fs');
let datos = [];
let crearArchivo = (pais, anio, valor, nomArch) => {
    return new Promise((resolve, reject) => {

        datos.push('Media Global: ');
        datos.push(medGlob);
        datos.push(' Media Pais: ');
        datos.push(pmedia);
        datos.push(' Paises por encima de la Suscripcion: ');
        datos.push(paisesMay);
        datos.push(' Paises por debajo de la Suscripcion: ');
        datos.push(paisesMen);
        datos.push(' TOP-5: ');
        datos.push(top);
        console.log(`Nombre del archivo ${nomArch}`);
        let data = JSON.stringify(datos);
        fs.writeFile(`resultados/${nomArch}.json`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`EL archivo del pais ${pmedia[1]} se a Guardado`);
        });
    });
}
module.exports = {
    crearArchivo
}