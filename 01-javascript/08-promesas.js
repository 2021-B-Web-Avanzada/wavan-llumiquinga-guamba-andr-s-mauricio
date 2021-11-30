// 08-promesas.js
const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (
            resolve, // return
            reject // throw
        ) => {
            if (numero % 2 == 0) {
                resolve(numero); // return numero -> resolve() : return undefined
            } else {
                reject('No es par =('); //  Throw 'No es par :('
            }
        }
    )
    return miPrimerPromesa
}
function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado); // return numeroElevadoAlCuadrado
        }
    );
    return miPrimerPromesa
}

promesaEsPar(6)
    .then( // ACEPTAN UN RETURN DE PROMESAS
        (datosPromesa)=>{
            console.log(datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )     // try
    .then(
        (datosElevarAlCuadrado)=>{
            console.log(datosElevarAlCuadrado);
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )    // catch
    .finally() // finally