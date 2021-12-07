//10-async-awake
const fs = require("fs");

function promesaLeerArchivo(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                "utf-8",
                (error, contenidoArchivo) => {
                    if (error) {
                        reject("Se tuvo un error al leer el archivo!\n", error);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            )
        }
    );
}
function promesaEscribirArchivo(path,contenidoActual, contenidoNuevo){
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + "\n" + contenidoNuevo,
                "utf-8",
                (error) => {
                    if (error) {
                        reject("Se tuvo un error al escribir el archivo\n\n", error);
                    } else {
                        resolve("Se sobreescribió el archivo correctamente.")
                    }
                }
            )
        }
    );
}

/* -------------- ASYNC -----------*/

//Se lo debe usar en (no hay mas opciones):
// 1) Métodos de clases
// 2) Funciones

// Esto no es posible
// const respuesta = await promesaLeerArchivo;

const ejemplo1 = async function (){}
const ejemplo2 = async () => {}


async function ejercicio (){
    console.log("1");
    let nuevoContenido = "";
    try{
        console.log("2");
        const contenidoActual = await promesaLeerArchivo("./06-ejemplo.txt");
        console.log(contenidoActual)
        console.log("3");
        await promesaEscribirArchivo("./06-ejemplo.txt", contenidoActual, "Holaaa");
        console.log("4");
        nuevoContenido = await promesaLeerArchivo("./06-ejemplo.txt");
        console.log(nuevoContenido);
        console.log("5");
    } catch (error){
        // Se debe manejar los errores
        console.error(error);
    }
    console.log("6");
    console.log("7");
    return nuevoContenido;
}

// Se convierte como promesa

ejercicio()
    .then(
        (data) => {
            console.log("Este es el resultado de la función: \n", data)
        }
    )
    .catch()
    .finally()