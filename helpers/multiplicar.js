const fs = require('fs');
const colors = require("colors");
const crearArchivo = async(base = 5, listar, hasta) => {

    try {
        let salida  = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${"x".cyan} ${i} ${'='.cyan} ${base * i}\n`);
        }
        
        if(listar && hasta > 0){
            console.log("========================".random);
            console.log(`|      Tabla del ${base}     |`.random);
            console.log("========================".random);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txtq`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
}