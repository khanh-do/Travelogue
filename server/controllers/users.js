const mongoose = require('mongoose');
require('../models/user.js');

const Attraction = mongoose.model('Attraction');
const Location = mongoose.model('Location');
const User = mongoose.model('User'); 

module.exports={
    index: function(req, res){
        res.render('index');
    },
}