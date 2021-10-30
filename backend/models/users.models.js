const mongoose = requiere('mongoose');
const users_schema = new mongoose.Schema ({

    id: {
        type: number,
        required: true,
        min: 1
    },
    nombre: {
        type: String,
        required: true,
        min: 1
    },
    email: {
        type: String,
        required: true,
        min: 1
    }, 
    password: {
        type: String,
        required: true,
        min: 1
    },       
    rol: {
        type: String,
        required: true,
        min: 1
    },    
    state: {
        type: String,
        required: true,
        min: 1
    },
});
module.exports = mongoose.model('users',users_schema);