const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`====== TABLA DE ${base} =======`.green);
    console.log('============='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i * base}\n`)
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`'${base}' no es un valor numerico!`);
            return;
        }

        if (!Number(limite)) {
            reject(`'${limite}' no es un valor numerico!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-${base}.txt`)
        });


    })

}

module.exports = {
    crearArchivo,
    listarTabla
}