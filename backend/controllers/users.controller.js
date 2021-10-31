//importamos el modelo para la BD
const{users_model} = require('../models')

//funcion que retornara el listado de prod de la BD
getAllUsers = (req, res)=> {
    users_model.find().exec((error, users) => {
        if(error)return res.status(500).json({error: true, mensaje: error});

        res.json({users});
    });
}


addUsers = (req, res) => {
    const users_new = new users_model(req.body);
    users_new.save((error, users) => {
        if(error) return res.status(500).json({error: true, mensaje:error});
        res.json({mensaje:req.body.nombre + " agregado satisfactoriamente"})
    })
}

deleteUsers = async (req, res) => {
    const users_delete = await users_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(users_delete) return  res.json({mensaje: users_delete.nombre + " eliminado correctamente"})
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch (error){
        return res.status(500).json({error: true, mensaje: error})
    }
}

module.exports =Object.freeze({
    getAllUsers,
    addUsers,
    deleteUsers
})