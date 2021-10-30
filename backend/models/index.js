//importamos todos los archivos de product.models que vamos a exportar
//luego los exportamos
const product_model = require('./product.model');
const sales_model = require('./sales.model');
const client_model = require('./client.model');


module.exports = Object.freeze({
    product_model,
    sales_model,
    client_model

});




