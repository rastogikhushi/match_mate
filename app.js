const express = require('express');
const app = express();
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session'); 
const User =require('./models/user');
const authRoutes=require("./routes/authRoutes");
const cardRoutes=require("./routes/cardRoutes");
const mongoose = require('mongoose');
const passport=require('passport');
const LocalStrategy= require('passport-local');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/baigan')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname , 'public')))

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.use(session(configSession));


app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));


app.get('/', (req,res)=>{
    res.render('home')
})




app.use(authRoutes);
app.use(cardRoutes);


const port = 8111;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})
