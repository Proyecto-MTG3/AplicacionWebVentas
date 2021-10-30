const express = require('express');
require ('dotenv').config();

//creamos el servidor
const app = express();

//Expongamos el backend
const cors = require('cors');
app.use(cors());

//Capturamos las peticiones del frontend
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Configurar la conexion con mongo atlas
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.User}:${process.env.PASSWORD}@cluster0.l4uir.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option ={useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(()=> console.log("Base de datos Conectada correctamente"))
.catch((e)=> console.log("Error en la conexion db:",e));

//Nuestro servidor debe estar escuchando
app.listen(process.env.PORT,()=> console.log('Servidor a su servico',process.env.PORT));