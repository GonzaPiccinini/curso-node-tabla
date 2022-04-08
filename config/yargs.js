const colors = require('colors')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la talba en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Limite de multiplicacion'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b) || isNaN(argv.h)) {
                        throw colors.red('Tiene que ser un numero')
                    }
                    return true;
                })
                .argv;

module.exports = argv;