const fs = require("fs");
let crearArchivo = (datos, pais, anio) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync("resultados")) {
            fs.mkdirSync("resultados");
        }
        archivo = `Datos Registrados \n`;
        archivo += `País: ${pais}\n`;
        archivo += `Valor: ${datos.porcentaje}`
        fs.writeFile(`resultados/${datos.codigo}-${anio}.txt`, archivo, (err) => {
            if (err) reject(err);
            else resolve(`Archivo generado: resultados/${datos.codigo}-${anio}`);
        });
    });
};
module.exports = {
    crearArchivo
};