const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        if (listar) {
            console.log('===================');
            console.log('    Tabla del:', base);
            console.log('===================');
        }

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.yellow(base)} ${colors.green('x')} ${colors.yellow(i)} ${colors.green('=')} ${colors.yellow(base * i)}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tabla-${base}.txt creada!`)
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}