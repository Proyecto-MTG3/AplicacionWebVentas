
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = "789011637624-7i7mvke7ke6rer0pc7e7f8dgha94igno.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);


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

async function verify(token){
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        return userid;
    }catch(error) {
        console.error(error);
        return null;
    }
}

app.post('/login', async (req, res) => {
    let userid = await verify(req.body.token);
    if (userid) {

            res.send({
                succes: true,
                message:'El token es valido'
            });
          userModel.users_add({
            email: req.body.email,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            activado: false 
        }, (error, usuario) => {
            if (error) {
                res.status = 500;
                res.send({
                    error: true,
                    message: error
                });
                return;
            }
            res.send({
                success: true,
                message: 'El usuario es valido',
                usuario: users
            });
        }); 
    } else {
        res.status = 400;
        res.send({
            error: true,
            message: 'No se pudo validar el usuario'
        });
    }
})




//Configurar la conexion con mongo atlas
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.User}:${process.env.PASSWORD}@cluster0.l4uir.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option ={useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(()=> console.log("Base de datos Conectada correctamente"))
.catch((e)=> console.log("Error en la conexion db:",e));

//Importacion de rutas
const{product_routes} = require ('./routers');
const{sales_routes} = require ('./routers');
const{users_routes} = require ('./routers');
const auth = require('registry-auth-token');

//uso de las rutas
app.use('/api/v1/product',product_routes);
app.use('/api/v1/sales',sales_routes);
app.use('/api/v1/users/',users_routes);




//Nuestro servidor debe estar escuchando
app.listen(process.env.PORT,()=> console.log('Servidor a su servico',process.env.PORT));