// empezar el servidor

const express = require('express');
const app = express(); //me devuelve un objeto

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Definir routes
app.use(require('./routes/index'));

//empiezo a escuchar
app.listen(3000);
console.log('Server on port 3000');
