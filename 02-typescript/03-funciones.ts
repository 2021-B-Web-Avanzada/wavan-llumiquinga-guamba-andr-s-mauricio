//03-funciones.ts

// Declaración típica

function sumarNumero (
    numeroInicial: number,
    ...listaInfinita : number []
): number{
    return listaInfinita.reduce(
        function (valorAcumulado,valorActual,indice,arreglo){
            return valorAcumulado+valorActual;
        },
        numeroInicial
    )
}

let respuestaNumerica = sumarNumero(1,2,3,4,5);
console.log("Respuesta: ", respuestaNumerica);

function imprimir(mensaje: string): void{
    console.log("Hola", mensaje);
}

// Arreglos

const arregloUno : number[] = [1,2,3,8];
const arregloDos : Array<number> = [1,2,3,8];

const arregloTres : (number|string|boolean)[] = [1, "dos", true];
const arregloCuatro : Array<number|string|boolean> = [1, "dos", true];

let arregloCinco : number[] | string [] = [1,2,3];
arregloCinco = ["uno","dos"];