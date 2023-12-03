
const express=require('express');
const router=express.Router();

const customerController=require('../controllers/CustomerController')

router.get('/', (req, res) => {
    res.render('home')
})




module.exports=router;