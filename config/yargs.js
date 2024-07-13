const argv = require("yargs")
    .options({
        "b": {
            alias: "base",
            type: "number",
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },

        "l": {
            alias: "listar",
            type: "boolean",
            default: false,
            describe: 'Genera la lista por consola de la tabla con sus 10 valores correspondientes',
        },

        "h": {
            alias: "hasta",
            type: "number",
            default: 10,
            describe: 'Es el limite que va a tener la tabla de multiplicar',
        }
    })
    .check((argv, opcions) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero!';
        }else if( isNaN(argv.h) ){
            throw 'el limite ( h ) tiene que ser un numero!'
        }
        return true;
    }).argv;

module.exports = argv;