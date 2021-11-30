//05-desestructuracion.js

//Desestructuración de objetos
const adrian ={
    nombre: "Adrian"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};

const adrianCarolina = { //Genera un nuevo objeto/referencia
    ...carolina, //El orden es importante para las propiedades que se repitan
    ...adrian   //El último reemplaza al anterior
}
console.log("Destructuración: ",adrianCarolina)

//Desestructurción de arreglos

const arregloUno = [1,2,3,4,5];
const arregloDos = [1,6,7,8,9];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
];
console.log("Super arreglo:", superArreglo);

//Desestructuracion de funciones

console.log(...superArreglo);