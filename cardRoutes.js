const express = require('express');
const Card = require('../models/card');


const router = express.Router();

router.get('/cards' , (req,res)=>{
    res.render('card')
})

module.exports = router;