const { crearArchivo } = require('./helpers/multuplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.log(error))
