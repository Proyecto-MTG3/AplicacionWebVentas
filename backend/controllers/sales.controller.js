//importamos el modelo para la BD
const{sales_model} = require('../models')

//funcion que retornara el listado de prod de la BD
getAllSales = (req, res)=> {
    sales_model.find().exec((error, sales) => {
        if(error)return res.status(500).json({error: true, mensaje: error});

        res.json({sales});
    });
}

addSales = (req, res) => {
    const sales_new = new sales_model(req.body);
    sales_new.save((error, sales) => {
        if(error) return res.status(500).json({error: true, mensaje:error});
        res.json({mensaje:req.body.idsales + " agregado satisfactoriamente"})
    })
}

module.exports =Object.freeze({
    getAllSales,
    addSales
})