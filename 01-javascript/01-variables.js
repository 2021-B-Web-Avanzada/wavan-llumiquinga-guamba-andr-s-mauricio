//01-javascript
//          01-Variables.js
//Mutable e Inmutabl
//Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno=false;
numeroDos=true;
//Inmutable
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//Vamos a preferir CONST > LET > Nunca VAR!


// Tipos de variables

const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Andres"; //string
const apellido = 'Llumiquinga'; //string
const booleanos = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanos);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); //number
console.log(Number("asd")); //NoN

//Trutys y Falsys
if(""){
    console.log("String vacío es truty");
} else {
    console.log("String vacío es falsy");
}

if("andres"){
    console.log("String con datos es truty");
} else {
    console.log("String con datos es falsy");
}
//string vació es falso
//string con datos es verdadero


if(-1){
    console.log("Negativos es truty");
}else{
    console.log("Negativos es falsy");
}
if(0){ //cero es falso
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");
}
if(1){ // positivo es truty
    console.log("Positivos es truty");
}else{
    console.log("Positivos es falsy");
}

if(null){ //null es falso
    console.log("Null es truty");
}else{
    console.log("Null es falso");
}

if(undefined){ // undefined es falsy
    console.log("Undefined es truty");
}else{
    console.log("Undefined es falso");
}

//Objeto JSON
const andres = {
    nombre:"Andres",
    apellido: 'Llumiquinga',
    edad: 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: '40',
    },
    mascotas: ['PeeWee', 'Chupes'],
};

//Acceso a las propiedades de un objeto
andres.nombre;
andres.apellido;
andres["nombre"]; //"Andres"
console.log(andres);
andres.nombre = "Sebastian";
console.log(andres.nombre);
andres["nombre"] = "Andy";
andres.sueldo; //undefined
console.log(andres.sueldo);

andres.sueldo = 1.2;
console.log(andres.sueldo);
andres["gastos"] = 0.8;
console.log(andres.gastos);
andres.nombre = undefined;
console.log(andres);
console.log(Object.keys(andres));
console.log(Object.values(andres));

//Eliminar llaves
delete andres.nombre;
console.log(andres);

//Variables por valor o referencia
//Variables por valor en JS son las primitivas: number, string, boolean

let edadAndres = 24;
let edadVicente = edadAndres; //referencia por valor
console.log(edadAndres);
console.log(edadVicente);

edadAndres = edadAndres + 1;
console.log(edadAndres);
console.log(edadVicente);

//Variables por referencia: object ({},[])
 //let rafael = {
   //  nombre: "Rafael"
 //};
 //let lenin = rafael;
 //console.log(rafael);
 //console.log(lenin);
 //lenin.nombre = "Lenin";
 //console.log(rafael);
 //console.log(lenin);
//En objetos y variables en JS, si igualamos un arreglo a otra variable hacemos el guardado de la referencia de esa vaiable.
//Las dos variables apuntan al mismo objeto

// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

//Clonado correcto de arreglos Object.assign
let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

// Ejemplo con arreglos

let arregloNumero = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumero);

console.log(arregloNumero);
console.log(arregloClonado);

arregloClonado[0] = 100;
arregloNumero[0] = 200;

console.log(arregloNumero);
console.log(arregloClonado);