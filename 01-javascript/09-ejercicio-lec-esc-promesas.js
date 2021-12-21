// 09-ejercicio-lec-esc-promesas.js
const fs = require('fs');
/* Hacer una funcion que me acepte como parametro
una variable con el path del archivo y el contenido a agregar
al contenido del archivo. La funcion debe tomar estos dos parametros
y leer el archivo y anadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODO esto debe ser realizado con promesas
- promesa de lectura
- promesa de escritura
 */

function promesaLeerArchivo(path){
    const Promesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, 'utf-8',
                (error,contenido) => {
                    if (error) {
                        reject('Erro en leer el archivo');
                    } else {
                        console.log('Se leyo correctamente')
                        resolve(contenido)
                    }
                }
            );
        }
    )
    return Promesa
}
function promesaEscribirArchivo(path, contenidoActual , nuevoContenido ){
    const PromesaEscritura = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path, contenidoActual + '\n' + nuevoContenido, 'utf-8',
                (error) => {
                    if (error) {
                        reject('Error escribiendo contenido');
                    } else {
                        console.log('Se escribio correctamente')
                        console.log(fs.readFileSync('./06-ejemplo.txt', "utf8"));
                    }
                }
            );
        }
    )
    return PromesaEscritura
}

function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then(
            (datosPromesa)=>{
                console.log(datosPromesa);
                return promesaEscribirArchivo(path,datosPromesa,nuevoContenido)
            }
        )
        .then(
            (datosEscritura)=>{
                console.log(datosEscritura)
                return promesaLeerArchivo(datosEscritura)

            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
}

ejercicio('./06-ejemplo.txt', 'Buenas dias');