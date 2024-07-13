const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require("./config/yargs.js");
require("colors");

console.clear();

const { base, listar, hasta } = argv;

crearArchivo( base, listar, hasta )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado".green))
    .catch(err => console.log(err));