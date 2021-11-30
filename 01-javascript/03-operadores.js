//03-operadores.js
// noinspection JSVoidFunctionReturnValueUsed

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

/* ---------- FUNCIONES COMO PARÁMETROS  ----------  */

//FIND --> Itera por cada valor del arreglo ordenadamente encontrando el valor

const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto){
        console.log("Indice Actual: ", indiceActual, "Valor Actual: ", valorActual);
        return valorActual.nombre === "Cristian";
    }
);
console.log("Respuesta Final: ", respuestaFind);

//FINDINDEX --> Devuelve el indice donde se encuentra el dato buscado
//
 const respuestaIndex = arreglo.findIndex(
     function (valorActual, indiceActual, arregloCompleto){
         console.log("Indice Actual: ", indiceActual, "Valor Actual: ", valorActual);
         return valorActual.nombre === "Cristian";
   }
 );
console.log("Respuesta Final: ", respuestaIndex);

//FOREACH --> Permite la impresión de cada elemento dentro del arreglo (su uso más común).

 const respuestaForEach = arreglo.forEach(
     function (valorActual, indiceActual, arregloCompleto){
         console.log("Indice Actual: ", indiceActual, "Valor Actual: ", valorActual);
     }
 );
 console.log("Respuesta Final: ", respuestaForEach);

 //MAP --> Modificar o Mutar un arreglo y devuelve un arreglo nuevo

 const respuestaMap = arreglo.map(
     (valorActual, indicectual, arregloCompleto) => {
         const nuevoElemento ={
             id: valorActual.id,
             nombre: valorActual.nombre,
             nota: valorActual.nota + 1
         };
         return nuevoElemento;
     }
 );
 console.log("Nuevo arreglo:", respuestaMap)

//FILTER: Generar un arreglo bajo una condición de filtrado
 const respuestaFiltro = arreglo.filter(
     (valorActual, indicectual, arregloCompleto) => {
         return valorActual.nota >= 14;
     }
 );
 console.log("Arreglo Filtrado: ", respuestaFiltro);

//SOME (OR): Permite verificar si existe alguien que cumpla la condición
 const respuestaSome = arreglo.some(
     function (valorActual, indicectual, arregloCompleto){
         return valorActual.nota > 14;
     }
 )
 console.log("Repuesta Some: ", respuestaSome);
//EVERY (AND): Permite verificr si todos cumplen la condición
const respuestaEvery = arreglo.every(
     function (valorActual, indicectual, arregloCompleto){
         return valorActual.nota < 14;
     }
 )
 console.log("Repuesta Every: ", respuestaEvery);

//Reduce --> Ejecutar varias operaciones con un arreglo (izquierda -> derecha)

 const respuestaReduce = arreglo.reduce(
     function (valorAcumulado, valorActual, indice ,arreglo){
         return (valorAcumulado - valorActual.nota);
     },
     100 // Acumulador
 );
 console.log("Respuesta Reduce:", respuestaReduce);
// //Reduce Rigth --> Ejecutar varias operaciones con un arreglo (derecha -> izquierda)
