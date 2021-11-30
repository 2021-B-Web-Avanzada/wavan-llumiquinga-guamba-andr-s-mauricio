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

/* ---------- MÉTODOS  ----------  */

console.log("Arreglo inicial:",arreglo);

// PUSH --> Agregar uno o varios elementos al final
arreglo.push(11);
console.log("PUSH 11:",arreglo);
//POP --> Eliminar el último elemento
arreglo.pop();
console.log("POP:",arreglo);
//UNSHIFT --> Añadir al principio
arreglo.unshift(5);
console.log("UNSHIFT 5: ",arreglo);

//SPLICE --> Eliminar/Añadir la posición y cantidad indicada
arreglo.splice(3,0,4); //primer numero es el indice a agregar
console.log("SPLICE ADD POSITION 0:",arreglo);
//Encuetra el primer elemeto y devuelve el índice
const indice = arreglo.indexOf(9);
console.log(indice)
arreglo.splice(indice,2); //desde el indice dado elimina la cantidad de numeros
console.log("SPLICE DELETE 9 y 10:",arreglo);

