const{users_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const users_joi = joi.object({
        
        _id:     joi.optional(),
        idUsers: joi.number().required(),
        nombre:  joi.string().required(),
        email:   joi.string().required(),
        password:joi.string().required(),
        rol:     joi.string().required(),
        state:   joi.string().required()

    });
    //vamos hacer las validaciones
    const{error} = users_joi.validate(req.body)
    if(error) return res.status(400).json({error:true, mensaje:error.details[0].message})
    next
}

verifyidUsers = (req, res, next) => {
    users_model.findOne({idUsers:req.body.idUsers}).exec((error, users) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        if(users) return res.status(400).json({error:true, mensaje: users.idUsers + "se encuentra registrado " + users.idUsers});
        next ();
    });
}

module.exports = Object.freeze ({
    verifyTypes,
    verifyidUsers
});