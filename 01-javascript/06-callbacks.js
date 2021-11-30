//06-callbacks.js

//Importar librería
const fs = require("fs"); //file system
console.log("Primero");

fs.readFile(
    "./06-ejemplo.txt",
    "utf-8",
    (error,contenido) =>{
        if(error){
            console.error({mensaje:'error leyendo contenido 06 ejemplo txt', error: error});
        }else{
            fs.readFile(
                './01-variable.js', //2
                "utf-8",
                (errorVariable,contenidoVariable) =>{
                    if(errorVariable){
                        console.error({mensaje: "error leyendo contenido 01 varibale", error : errorVariable });
                    } else{
                        console.log(contenido, contenidoVariable);
                    }
                }
                );
        }
    }
);

console.log("Tercero");