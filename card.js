const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    img: {
        type: String,
        trim: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: Number,
        required: true
    }
})


let Card = mongoose.model('Card', cardSchema);
module.exports = Card;