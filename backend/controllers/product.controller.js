//importamos el modelo para la BD
const{product_model} = require('../models')

//funcion que retornara el listado de prod de la BD
getAllProducts = (req, res)=> {
    product_model.find().exec((error, products) => {
        if(error)return res.status(500).json({error: true, mensaje: error});

        res.json({products});
    });
}

module.exports =Object.freeze({
    getAllProducts
})