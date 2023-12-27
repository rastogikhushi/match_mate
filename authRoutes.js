const express = require('express');
const User = require('../models/user');

const router = express.Router();
const passport = require('passport');

router.get('/register', (req,res) => {
    res.render('signup')
})
router.post('/register',async(req,res)=>{
    let{username,email,password}=req.body;
    let newuser=new User({username,email});
    let nayabanda=await User.register(newuser,password)
    // console.log(nayabanda);
    res.redirect('/login');
})
router.get('/login', (req,res) => {
    res.render('login')
})

router.post('/login', 
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/cards');
});

module.exports = router;