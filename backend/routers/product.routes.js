const router = require('express').Router();
const {product_controller} = require('../controllers');
//const {product_middleware} = require('../middlewares');

//router.post('/add',product_middleware.verifyTypes, product_middleware.verifyid, product_controller.addProduct);
router.get('/list',product_controller.getAllProducts); 
//router.put('/update',product_middleware.verifyTypes, product_controller.updateProduct); 
//router.delete('/delete/:id',product_controller.deleteProduct);  
router.post('/add',product_controller.addProduct)



module.exports=router;