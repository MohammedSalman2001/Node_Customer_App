
const express=require('express');
const router=express.Router();

const customerController=require('../controllers/CustomerController')

router.get('',customerController.initializeUi)
router.post('',customerController.findCustomers)
router.get('/new-customer-form',customerController.newCustomerForm)
router.post('/save-customer-form',customerController.saveCustomers)
router.get('/update-customer-form/:nic',customerController.updateCustomerForm)
router.post('/modify-customer-form',customerController.modifyCustomerForm)



module.exports=router;