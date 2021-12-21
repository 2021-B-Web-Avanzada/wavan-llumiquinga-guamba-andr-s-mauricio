const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
    const path = './registro.txt';

    //menu
    async function menu() {
        try{
            const menu = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion1',
                        message: 'Seleccione una opcion',
                        choices: ['Marcas', 'Modelos']
                    },
                ]);
            // console.log(menu);
            switch (menu.seleccion1) {
                case 'Marcas':
                    menuMarcas();
                    break;
                case 'Modelos':
                    menuModelos();
                    break;
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuMarcas() {
        try{
            const menu2marcas = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Crear marca',
                            '2) Consultar marcas',
                            '3) Actualizar marca',
                            '4) Eliminar marca',
                            '5) Atras'
                        ]
                    }
                ]);
            //console.log(menu2marcas);
            switch (menu2marcas.seleccion2) {
                case '1) Crear marca':
                    await crearMarca();
                    console.log('Creando marca');
                    break;
                case '2) Consultar marcas':
                    await menuConsultarMarcas();
                    break;
                case '3) Actualizar marca':
                    await actualizarMarca()
                    break;
                case '4) Eliminar marca':
                    await borrarMarca();
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuModelos() {
        try{
            const menu2modelos= await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Crear modelo',
                            '2) Consultar modelo',
                            '3) Actualizar modelo',
                            '4) Eliminar modelo',
                            '5) Atras']
                    }
                ]);
            //console.log(menu2modelos);
            switch (menu2modelos.seleccion2) {
                case '1) Crear modelo':
                    await crearModelo();
                    break;
                case '2) Consultar modelo':
                    await mostrarModelo();
                    break;
                case '3) Actualizar modelo':
                    await actualizarModelo();
                    break;
                case '4) Eliminar modelo':
                    await eliminarModelo();
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuConsultarMarcas() {
        try{
            const menuConsultarMarcas = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Consultar todas las marcas',
                            '2) Consultar una marca',
                            '3) Atras'

                        ]
                    }
                ]);
            switch (menuConsultarMarcas.seleccion) {
                case '1) Consultar todas las marcas':
                    const respuestaConsultarTodasLasMarcas = await consultarTodasLasMarcas();
                    console.log(respuestaConsultarTodasLasMarcas);
                    menuMarcas();
                    break;
                case '2) Consultar una marca':
                    const respuestaConsultarMarca = await consultarMarca();
                    console.log(respuestaConsultarMarca);
                    menuMarcas();
                    break;
                case '3) Atras':
                    menuMarcas();
            }
        } catch(e){
            console.error(e);
        }
    }

    menu();

    //Funciones para CRUD
    async function crearMarca() {
        try {
            const respuestaCrearMarca = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreMarca',
                        message: 'Ingresa el nombre de la marca:'
                    },
                    {
                        type: 'input',
                        name: 'pais',
                        message: 'Ingresa el pais:'
                    },
                    {
                        type: 'input',
                        name: 'anio',
                        message: 'Ingresa el anio:'
                    },
                    {
                        type: 'input',
                        name: 'ensamblado',
                        message: 'Es ensamblado en Ecuador?(S/N):'
                    },
                    {
                        type: 'input',
                        name: 'permiso',
                        message: 'Tiene permiso de exportación?(S/N):'
                    }

                ]);
            console.log('Nueva Marca: ', respuestaCrearMarca);
            const boolEnsamblado = (/S/i).test(respuestaCrearMarca.ensamblado)
            const boolPermiso = (/S/i).test(respuestaCrearMarca.permiso)
            const respuestaCrearMarcaTypado = {
                nombreMarca: respuestaCrearMarca.nombreMarca,
                pais: respuestaCrearMarca.pais,
                año: parseInt(respuestaCrearMarca.anio),
                Ensamblado: boolEnsamblado,
                permiso: boolPermiso,
                modelos: []
            }
            const respuestaLeerArchivo= await promesaLeerArchivo(path);
            if (respuestaLeerArchivo !== '') {
                await promesaEscribirMarca(respuestaLeerArchivo + '\n' + JSON.stringify(respuestaCrearMarcaTypado));
            } else {
                await promesaEscribirMarca(JSON.stringify(respuestaCrearMarcaTypado));
            }
            //console.log('Marca registrada');
            await menuMarcas();
        } catch (e) {
            console.error(e);
        }
    }

    async function consultarMarca() {
        try {
            const nombreAConsultar = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreMarca',
                        message: 'Ingrese el nombre de la marca:'
                    }
                ]);
            // console.log('Consultar marca: ', nombreAConsultar);
            const marcas = await promesaLeerArchivo(path);
            // console.log(marcas);
            let arrayMarcas = [];
            if (marcas !== '') {
                arrayMarcas = marcas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayMarcas',arrayMarcas);
            }

            if (arrayMarcas.length === 0) {
                return 'No hay marcas registradas';
            } else {
                if (arrayMarcas.some(
                    valorActual => {
                        return valorActual.nombreMarca === nombreAConsultar.nombreMarca;
                    }
                )) {
                    return (arrayMarcas.filter(
                            (valorActual) => {
                                return valorActual.nombreMarca === nombreAConsultar.nombreMarca;
                            }
                        )
                    );
                } else {
                    return 'No existe la marca: ' + nombreAConsultar.nombreMarca;
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    async function consultarTodasLasMarcas() {
        try {
            const marcas = await promesaLeerArchivo(path);
            //console.log(marcas);
            let arrayMarcas = [];
            if (marcas !== '') {
                arrayMarcas = marcas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayMarcas',arrayMarcas);
            }
            if (arrayMarcas.length === 0) {
                return 'No hay marcas registradas';
            } else {
                return (arrayMarcas);


            }
        } catch (e) {
            console.error(e);
        }
    }

    async function borrarMarca() {
        try {
            const marcas = await promesaLeerArchivo(path);
            console.log(marcas);
            let arrayMarcas = [];
            if (marcas !== '') {
                arrayMarcas = marcas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayMarcas',arrayMarcas);
            }
            if (arrayMarcas.length === 0) {
                return 'No hay marcas registradas';
            } else {
                const respuestaSelecBorrar = await promesaSeleccionarMarca(arrayMarcas.map(
                    valorActual => {
                        return valorActual.nombreMarca;
                    }
                ));
                arrayMarcas.splice(arrayMarcas.findIndex(
                    valorActual => {
                        return valorActual.nombreMarca === respuestaSelecBorrar.borrarMarca;
                    }
                ), 1);
                await promesaEscribirMarca(actualizarRegistro(arrayMarcas));
            }
            //console.log('Marca eliminada');
            menuMarcas();
        } catch (e) {
            console.error(e);
        }
    }

    async function actualizarMarca(){
        try{
            const marcas = await promesaLeerArchivo(path);
            console.log(marcas);
            let arrayMarcas = [];
            if (marcas !== '') {
                arrayMarcas = marcas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                console.log('arrayMarcas',arrayMarcas);
            }
            if (arrayMarcas.length === 0) {
                return console.log('No hay marcas registradas');

            } else {
                const respuestaSelecBorrar = await promesaSeleccionarMarca(arrayMarcas.map(
                    valorActual => {
                        return valorActual.nombreMarca;
                    }
                ));
                arrayMarcas.splice(arrayMarcas.findIndex(
                    valorActual => {
                        return valorActual.nombreMarca === respuestaSelecBorrar.borrarMarca;
                    }
                ), 1);
                await promesaEscribirMarca(actualizarRegistro(arrayMarcas));
            }
            await crearMarca();


        }catch (e) {
            console.error(e);
        }

    }

    const promesaSeleccionarMarca = (marcas) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'borrarMarca',
                message: 'Seleccione la marca:',
                choices: marcas,
            });
    }

    function actualizarRegistro(arrayMarcas) {
        let listaActualizada = '';
        arrayMarcas.map(
            (valorActual, indiceActual) => {
                if (indiceActual < arrayMarcas.length - 1) {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                } else {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual);
                }

            }
        );
        return listaActualizada;
    }

    const promesaEscribirMarca = (contenidoNuevo) => {
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            }
        );
    }

    const promesaLeerArchivo = (path) => {
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(contenido);
                        }
                    }
                );
            }
        );
    }

    const promesaSeleccionarMarcaParaCrearModelo = (marcas) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'crearModeloEnMarca',
                message: 'Seleccione la marca a la que pertenece el modelo:',
                choices: marcas,
            });
    }

    async function crearModelo() {
        try {

            const todosMarcas = await promesaLeerArchivo(path);
            //console.log('marcas',todosMarcas);
            let arrayMarcas = [];
            if (todosMarcas.length === 0) {
                console.log('No hay marcas registradas');
            } else {
                if (todosMarcas !== '') {
                    arrayMarcas = todosMarcas.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayMarcas',arrayMarcas);

                    const respuestaSelecCrearModelo = await promesaSeleccionarMarcaParaCrearModelo(arrayMarcas.map(
                        valorActual => {
                            return valorActual.nombreMarca;
                        }
                    ));
                    // console.log('respuestaSelecCrearModelo',respuestaSelecCrearModelo)
                    const marcas = arrayMarcas.splice(arrayMarcas.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreMarca === respuestaSelecCrearModelo.crearModeloEnMarca) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribirMarca(actualizarRegistro(arrayMarcas));
                    const marca = marcas[0];

                    const respuestaCrearModelo = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'nombreP',
                                message: 'Ingresa el nombre del modelo:'
                            },
                            {
                                type: 'input',
                                name: 'tipo',
                                message: 'Ingresa el tipo de carro:'
                            },
                            {
                                type: 'input',
                                name: 'fecha',
                                message: 'Ingresa el año del modelo:'
                            },
                            {
                                type: 'input',
                                name: 'AC',
                                message: 'Tiene AC?(S/N):'
                            },
                            {
                                type: 'input',
                                name: 'soat',
                                message: 'Tiene soat?(S/N):'
                            }

                        ]);
                    // console.log('Nuevo Modelo: ', respuestaCrearModelo);
                    const boolAc = (/S/i).test(respuestaCrearModelo.AC);
                    const boolSoat = (/S/i).test(respuestaCrearModelo.soat);
                    const respuestaCrearModeloTypado = {
                        nombreModelo: respuestaCrearModelo.nombreP,
                        tipo: respuestaCrearModelo.tipo,
                        año: parseInt(respuestaCrearModelo.fecha),
                        AC: boolAc,
                        Soat: boolSoat
                    }

                    marca.modelos.push(respuestaCrearModeloTypado);

                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribirMarca(respuestaLeerArchivo + '\n' + JSON.stringify(marca));
                    } else {
                        await promesaEscribirMarca(JSON.stringify(marca));
                    }
                }
            }
            await menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function eliminarModelo(){
        try {
            const todosMarcas = await promesaLeerArchivo(path);
            //console.log('marcas',todosMarcas);
            let arrayMarcas = [];
            if (todosMarcas.length === 0) {
                console.log('No hay marcas registradas');
            } else {
                if (todosMarcas !== '') {
                    arrayMarcas = todosMarcas.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayMarcas',arrayMarcas);

                    const respuestaSelecEliminarModelo = await promesaSeleccionarMarcaParaCrearModelo(arrayMarcas.map(
                        valorActual => {
                            return valorActual.nombreMarca;
                        }
                    ));
                    // console.log('respuestaSelecCrearProfesor',respuestaSelecEliminarProfesor)
                    const marcas = arrayMarcas.splice(arrayMarcas.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreMarca === respuestaSelecEliminarModelo.crearModeloEnMarca) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribirMarca(actualizarRegistro(arrayMarcas));
                    const marca = marcas[0];
                    //console.log('modelos',JSON.stringify(marca))
//                    console.log('modelos',JSON.stringify(marca.modelos));
                    const arrayModelos =  JSON.stringify(marca.modelos);
                    console.log('marca', marca);
                    // console.log('Copie el modelo de aqui: ', arrayModelos);

                    const menuEliminarModelos= await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'seleccionModeloEliminar',
                                message: 'Ingrese el indice del modelo que desea eliminar',
                            }
                        ]);
                    const modeloEliminar = await menuEliminarModelos;
                    //  console.log('modeloEliminar >>>> ',modeloEliminar.seleccionModeloEliminar);

                    const eliminarModeloDelArray = (indice, arreglo) => {
                        return arreglo.splice(indice, 1);
                        // return arreglo.filter( e => e !== indice );
                    }

                    const arrayArrayModelos = JSON.parse(arrayModelos);
                    //console.log('ELIMINAR', modeloEliminar )
                    eliminarModeloDelArray(modeloEliminar.seleccionModeloEliminar , arrayArrayModelos);
                    //console.log( 'arrayModelos',arrayArrayModelos );
                    //console.log('marca',JSON.stringify(marca))
                    const marcaModeloEliminado = {
                        nombreMarca: marca.nombreMarca,
                        pais: marca.pais,
                        año: marca.anio,
                        Ensamblado: marca.ensamblado,
                        permiso: marca.licencia,
                        modelos: arrayArrayModelos
                    }
                    //console.log('marcaModeloEliminado >>>> ',marcaModeloEliminado)
                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribirMarca(respuestaLeerArchivo + '\n' + JSON.stringify(marcaModeloEliminado));
                    } else {
                        await promesaEscribirMarca(JSON.stringify(marcaModeloEliminado));
                    }
                }
            }
            await menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function mostrarModelo(){
        try {
            const todosMarcas = await promesaLeerArchivo(path);
            let arrayMarcas = [];
            if (todosMarcas.length === 0) {
                console.log('No hay marcas registradas');
            } else {
                if (todosMarcas !== '') {
                    arrayMarcas = todosMarcas.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    const respuestaSelecEliminarModelo = await promesaSeleccionarMarcaParaCrearModelo(arrayMarcas.map(
                        valorActual => {
                            return valorActual.nombreMarca;
                        }
                    ));
                    const marcas = arrayMarcas.splice(arrayMarcas.findIndex(
                        valorActual => {
                            if (valorActual.nombreMarca === respuestaSelecEliminarModelo.crearModeloEnMarca) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    const marca = marcas[0];
                    const arrayModelos =  JSON.stringify(marca.modelos);
                    //console.log('marca', marca);
                    console.log('Modelos ', JSON.parse(arrayModelos));
                }
            }
            await menu();
        } catch (e) {
            console.error(e);
        }
    }

    async function actualizarModelo(){
        try{
            const todosMarcas = await promesaLeerArchivo(path);
            //console.log('marcas',todosMarcas);
            let arrayMarcas = [];
            if (todosMarcas.length === 0) {
                console.log('No hay marcas registradas');
            } else {
                if (todosMarcas !== '') {
                    arrayMarcas = todosMarcas.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayMarcas',arrayMarcas);

                    const respuestaSelecEliminarModelo = await promesaSeleccionarMarcaParaCrearModelo(arrayMarcas.map(
                        valorActual => {
                            return valorActual.nombreMarca;
                        }
                    ));
                    // console.log('respuestaSelecCrearModelo',respuestaSelecCrearModelo)
                    const marcas = arrayMarcas.splice(arrayMarcas.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreMarca === respuestaSelecEliminarModelo.crearModeloEnMarca) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribirMarca(actualizarRegistro(arrayMarcas));
                    const marca = marcas[0];
                    //console.log('modelos',JSON.stringify(marca))
//                    console.log('modelos',JSON.stringify(marca.modelos));
                    const arrayModelos =  JSON.stringify(marca.modelos);
                    console.log('marca ', marca);
                    //console.log('arrayModelos', arrayModelos);

                    const menuEliminarModelos= await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'seleccionModeloEliminar',
                                message: 'Ingrese el indice del modelo que desea actualizar: ',
                            }
                        ]);
                    const modeloEliminar = await menuEliminarModelos;
                    //console.log('modeloEliminar >>>> ',modeloEliminar.seleccionModeloEliminar);

                    const eliminarModeloDelArray = (indice, arreglo) => {
                        arreglo.splice(indice, 1);
                    }

                    const arrayArrayModelos = JSON.parse(arrayModelos);
                    //console.log('ELIMINAR', modeloEliminar )
                    eliminarModeloDelArray(modeloEliminar.seleccionModeloEliminar , arrayArrayModelos);
                    //console.log( 'arrayModelos',arrayArrayModelos );
                    //console.log('marca',JSON.stringify(marca))

                    //console.log('marcaModeloEliminado >>>> ',marcaModeloEliminado)
                    const respuestaModificarModelo = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'nombreP',
                                message: 'Ingresa el nombre del modelo:'
                            },
                            {
                                type: 'input',
                                name: 'tipo',
                                message: 'Ingresa el tipo de carro:'
                            },
                            {
                                type: 'input',
                                name: 'fecha',
                                message: 'Ingresa el año del modelo:'
                            },
                            {
                                type: 'input',
                                name: 'AC',
                                message: 'Tiene AC?(S/N):'
                            },
                            {
                                type: 'input',
                                name: 'soat',
                                message: 'Tiene soat?(S/N):'
                            }

                        ]);
                    // console.log('Nuevo Modelo: ', respuestaCrearModelo);
                    const boolAc = (/S/i).test(respuestaModificarModelo.AC);
                    const boolSoat = (/S/i).test(respuestaModificarModelo.soat);
                    const respuestaModificarProfesorTypado = {
                        nombreModelo: respuestaModificarModelo.nombreP,
                        tipo: respuestaModificarModelo.tipo,
                        año: parseInt(respuestaModificarModelo.fecha),
                        AC: boolAc,
                        Soat: boolSoat
                    }

                    const marcaModeloEliminado = {
                        nombreMarca: marca.nombreMarca,
                        pais: marca.pais,
                        año: marca.anio,
                        Ensamblado: marca.ensamblado,
                        permiso: marca.permiso,
                        modelos: arrayArrayModelos
                    }
                    marcaModeloEliminado.modelos.push(respuestaModificarProfesorTypado);
                    console.log('modificado', JSON.stringify(marcaModeloEliminado))

                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribirMarca(respuestaLeerArchivo + '\n' + JSON.stringify(marcaModeloEliminado));
                    } else {
                        await promesaEscribirMarca(JSON.stringify(marcaModeloEliminado));
                    }

                }
            }
            await menu();


        }
        catch (e) {
            console.error(e);
        }
    }

    async function elegirMarcaDondeCrearModelo() {
        try {
            const marcas = await promesaLeerArchivo(path);
            console.log(marcas);
            let arrayMarcas = [];
            if (marcas !== '') {
                arrayMarcas = marcas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayMarcas',arrayMarcas);
            }
            if (arrayMarcas.length === 0) {
                return 'No hay marcas registradas';
            } else {
                const respuestaSelecMarca = await promesaSeleccionarMarcaParaCrearModelo(arrayMarcas.map(
                    valorActual => {
                        return valorActual.nombreMarca;
                    }
                ));
                return respuestaSelecMarca;
                // console.log('respuestaSelecMarca',  respuestaSelecMarca)

            }
        } catch (e) {
            console.error(e);
        }
    }
    const promesaSeleccionarModeloEliminar = (modelos) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'eliminarModelo',
                message: 'Seleccione el modelo al que desea eliminar:',
                choices: modelos,
            });
    }

}

main();
