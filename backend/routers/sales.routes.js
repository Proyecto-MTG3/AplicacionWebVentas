const router = require('express').Router();
const {sales_controller} = require('../controllers');
//const {sales_middleware} = require('../middlewares');

//router.post('/add',sales_middleware.verifyTypes, sales_middleware.verifyid, sales_controller.addSales);
router.get('/list',sales_controller.getAllSales); 
//router.put('/update',sales_middleware.verifyTypes, sales_controller.updateSales); 
//router.delete('/delete/:id',sales_controller.deleteSales); 
router.post('/add',sales_controller.addSales) 

module.exports=router;