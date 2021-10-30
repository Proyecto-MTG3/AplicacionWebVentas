const mongoose = require ('mongoose');

const sales_schema = new mongoose.Schema ({

    idsales: {
        type: String,
        required: true,
        min: 1
    },    
    fecha:{
        type: Date,
        default: Date.now
    },
    cantidad:{
        type: Number,
        required :true,
        min: 1
    },

    total_cost: {
        type: Number,
        required: true
    },
    // users:{
    //     type: Schema.Types.ObjectId,
    //     ref : "users"
    // },
    state:{
        type: String,
        required : true
    },    

    product : [{
        producto:{
            // type: Schema.Types.ObjectId,
            // ref : "product"
        },
    }]
});

module.exports = mongoose.model('sales',sales_schema);