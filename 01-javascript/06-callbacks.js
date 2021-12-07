// 06-callbacks.js
const fs = require('fs'); // file system
// 06-ejemplo.txt -> Hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', // 1
    'utf-8',
    (error, contenido) => {
        if(error){
            console.error({mensaje:'error leyendo contenido 06 ejemplo txt', error: error});
        }else{
            fs.readFile(
                './01-variables.js', // 2
                'utf-8',
                (errorVariable, contenidoVariable) => {
                    if(errorVariable){
                        console.error({mensaje:'error leyendo contenido 01 variable', error: errorVariable});
                    }else{
                        console.log(contenido, contenidoVariable);
                    }
                }
            );
        }
    }
);
console.log('TERCERO');