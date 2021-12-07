//01-variables.ts

let nombre: string = 'Andres' ; //primitivo
let nombre2: String = 'Andres2'; //clase String
//nombre = 1;

nombre = 'Vicente';

// Duck typing
let apellido = 'llumiquinga';
apellido.toUpperCase(); //metodos string

let marihuana: any =2;
marihuana= '2';

let edadMultiple: number | string | Date =2;
edadMultiple='3';
edadMultiple= new Date();
