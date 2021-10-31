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
        res.json({mensaje:"Factura " +req.body.idSales + " agregado satisfactoriamente"})
    })
}

deleteSales = async (req, res) => {
    const sales_delete = await sales_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(sales_delete) return  res.json({mensaje: sales_delete.idSales + " eliminada correctamente"})
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch (error){
        return res.status(500).json({error: true, mensaje: error})
    }
}

module.exports =Object.freeze({
    getAllSales,
    addSales,
    deleteSales
})