
const express=require('express');
const router=express.Router();

const customerController=require('../controllers/CustomerController')

router.use('',customerController.initializeUi)
router.post('',customerController.findcustomers)



module.exports=router;