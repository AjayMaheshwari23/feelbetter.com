const express = require('express');
const router = express.Router();
const Admins = require('../Models/AdminModel');

router.get('/' ,(req,res)=>{
    Admins.find().then((data)=>{
        res.json(data);
    });
});


module.exports = router ;
