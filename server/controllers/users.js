const mongoose = require('mongoose');
require('../models/user.js');
var bcrypt = require('bcrypt');

var Attraction = mongoose.model('Attraction');
var Location = mongoose.model('Location');
var User = mongoose.model('User');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },

    login_user: function (req, res) {
        console.log("#5 in Server Controller:", req.body);
        let email = req.body.email;
        let password = req.body.password;
        User.findOne({ email: email }, function (err, user) {
            // the query does not return an error when a null is returned
            // var outcome = 
            // bcrypt.compare(req.body.password, user.password)
            //     .then(result => {
            //         console.log("actual result ", result)
            //         return result;
            //         }
            //     )
            //     .catch(error => {
            //     });

            // bcrypt.compare(password1,password2 )
            // .then(result => {
            //     return result;
            // })
            // .catch(error => {
	 
            // })
            // var outcome = bcrypt.compare(req.body.password, user.password)

            // if(!outcome){
            //     console.log("outcome ", outcome)
            //     res.json({message:"The passwords don't match."});
            
            if (!user) {
                res.json({ message: "User not found" });
            }else if (!password){
                res.json({message:"Password is null"})
            }else if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", data: user });
            }
        });
    },

    create_user: function (req, res) {
        console.log("#5 in Server Controller:", req.body);

        bcrypt.hash(req.body.password, 10)
            .then(hashed_password => {
                //instantiate new user
                var new_user = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hashed_password,
                })
                console.log('new_user: ', new_user)
                new_user.save(function (err, user) {
                    if (err) {
                        res.json({message: "error", errors: err})
                    } else {
                        req.session.username = req.body.username
                        res.json({message: "Success", data: user, username:req.session.username})
                    }
                })
            });
    },

    find_user: function(req, res){
        // console.log("#5: in Server Controller", req.params);
        // Find the user by username, and return the user object found
        User.findOne({username:req.params.username}, function(err, user){
            if(err){
                res.json({message: "Error", error:err});
            } else {
                res.json({message: "Success", data: user});
            }
        });
    },
}