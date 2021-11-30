//04-funciones.js
/*
//Funciones que devuelven un valor
function soloNumeros(a,b,c){
    return a - b +c;
}
//JS permite el uso de funciones sin validar
soloNumeros();
soloNumeros(1,2,a);
function soloLetras(a,b,c){
    console.log(a,b,c); //Return undefined
}
//Funciones Nombradas
function funcionNombrada() {
}
//Funciones Anonimas
const funcionSinNombre1 = function (){}
let funcionSinNombre2= function (){}
//var funcionSinNombre3 = function (){}
//[].forEach(function (){})
funcionSinNombre1();
funcionSinNombre2();
//funcionSinNombre3();
//Funcion Anonima --> Fat Arrow Functions
const funcionFatArrow1 = () =>{}
let funcionFatArrow2= () => {}
[].forEach(() => {})
funcionFatArrow1()
funcionFatArrow2()
const funcionFatArrow3 = () =>{}
const funcionFatArrow4 = (x) =>{
    return x+1;
}
const funcionFatArrow5 = (x) => x+1;
const funcionFatArrow6 = x => x+1;   //Un único parámetros
                                    // Se omite los parentesis
*/
// Recibir parámetros infinitos (un arreglo por funcion)

function sumarNumeros(...otrosNumeros) {
    return otrosNumeros.reduce(
        (acumulador, valorActual ) => acumulador + valorActual, 0);
}

console.log("Suma", sumarNumeros(1,2,3,4,5,6,7))