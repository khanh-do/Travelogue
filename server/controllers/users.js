const mongoose = require('mongoose');
require('../models/user.js');

var Attraction = mongoose.model('Attraction');
var Location = mongoose.model('Location');
var User = mongoose.model('User'); 

module.exports={
    index: function(req, res){
        res.render('index');
    },

    login_user: function(req, res){
        console.log("#5 in Server Controller:", req.body);
        let email = req.body.email;
        let password = req.body.password;
        User.findOne({email: email}, function(err, user){
            // need to check password match and throw error
            // the query does not return an error when a null is returned
            if(!user){
                res.json({message: "User not found"});
            }
            else if(err){
                res.json({message: "Error", error:err});
            } else {
                res.json({message: "Success", data: user});
            }
        });
    }
}