/* ---------- ARREGLOS  ----------  */

//Los arreglos pueden ser igualados a muchas cosas
// no se limita a algo

// let arreglo = [6,7,8,9,10];
// arreglo = 1;
// arreglo = true;
// arreglo = undefined;
// arreglo = [true, 1, 1.1, "Hola", undefined, [1,2,3]];
// console.log(arreglo);

let arreglo = [6,7,8,9,10];

/* ---------- Tipos de FORs  ----------  */

//Forof --> Valores

for(let numero of arreglo){
    console.log("Número", numero)
}

//Forin --> Objetos y maneja índices

for (let indice in arreglo){
    console.log("Indice", indice);
}

let objetoPrueba = {a: 1, b: 2, c:3};
for(let llave in objetoPrueba){
    console.log("Objeto llave:", llave);
}
