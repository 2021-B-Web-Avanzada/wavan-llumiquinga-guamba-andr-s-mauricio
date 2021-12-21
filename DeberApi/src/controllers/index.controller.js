const { Pool } =  require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Viviana123',
    database: 'firstapi',
    port:'5432'
})
//Funcion para leer Marcas
const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM marcas ');
    res.status(200).json(response.rows);
    //console.log(response.rows);
    //res.send('users')
};
//Funcion para crear Marcas
const createUser = async (req, res) => {
    const { idmarca, nombremarca, pais, ensamblado } = req.body;
    const response = await pool.query('INSERT INTO marcas (idMarca, nombremarca, pais, ensamblado) VALUES ($1, $2, $3, $4)', [idmarca, nombremarca, pais, ensamblado]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {idmarca, nombremarca, pais, ensamblado}
        }
    })
};
//Funcion para eliminar Marca
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM marcas where idmarca = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};
//Funcion para actualizar Marcas
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { idmarca, nombremarca, pais, ensamblado } = req.body;

    const response =await pool.query('UPDATE marcas SET idmarca = $1, nombremarca = $2, pais = $3, ensamblado = $4 WHERE idmarca = $1', [
        idmarca,
        nombremarca,
        pais,
        ensamblado
    ]);
    res.json('Marca Updated Successfully');
};

//Funcion para leer Modelos
const getModelos = async (req,res) => {
    const response = await pool.query('SELECT modelos.idmodelo, modelos.cod_marca, modelos.nombremodelo, modelos.tipo, modelos.ac,modelos.soat, marcas.nombremarca FROM modelos INNER JOIN marcas ON modelos.cod_marca = marcas.idmarca ');
    res.status(200).json(response.rows);
    //console.log(response.rows);
    //res.send('users')
};
//Funcion para crear Modelos
const createModelo = async (req, res) => {
    const { idmodelo, cod_marca, nombremodelo, tipo, ac, soat } = req.body;
    const response = await pool.query('INSERT INTO modelos (idmodelo, cod_marca, nombremodelo, tipo, ac, soat) VALUES ($1, $2, $3, $4, $5, $6)', [idmodelo, cod_marca, nombremodelo, tipo, ac, soat]);
    res.json({
        message: 'Model Added successfully',
        body: {
            user: {idmodelo, cod_marca, nombremodelo, tipo, ac, soat}
        }
    })
};
//Funcion para eliminar Modelo
const deleteModelo = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM modelos where idmodelo = $1', [
        id
    ]);
    res.json(`Model ${id} deleted Successfully`);
};
//Funcion para actualizar Modelos
const updateModelo = async (req, res) => {
    const id = parseInt(req.params.id);
    const { idmodelo, cod_marca, nombremodelo, tipo,ac, soat } = req.body;

    const response =await pool.query('UPDATE modelos SET idmodelo = $1, cod_marca = $2, nombremodelo = $3, tipo = $4, ac=$5 , soat =$6  WHERE idmodelo = $1', [
        idmodelo,
        cod_marca,
        nombremodelo,
        tipo,
        ac,
        soat
    ]);
    res.json('Model Updated Successfully');
};

//exportar funciones
module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getModelos,
    createModelo,
    deleteModelo,
    updateModelo
}