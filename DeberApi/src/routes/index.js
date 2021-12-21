const {Router} = require ('express');
const router = Router();

const { getUsers, createUser, deleteUser, updateUser, getModelos, createModelo, deleteModelo, updateModelo } = require('../controllers/index.controller')
//leer todos los usuarios - Marcas
router.get('/users', getUsers );
//Crear marcas
router.post('/users', createUser);
//Borar Marca
router.delete('/users/:id', deleteUser);
//Actualizar Marca
router.put('/users/:id', updateUser)

//leer todos los Modelos
router.get('/modelos', getModelos );
//Crear Modelos
router.post('/modelos', createModelo );
//Borar Modelo
router.delete('/modelos/:id', deleteModelo);
//Actualizar Marca
router.put('/modelos/:id', updateModelo)
module.exports = router;