var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const path = require('path');
const flash = require('express-flash');
// require validator, used to check a valid email format input
// var validator = require('validator');
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));

//some computer npm install bcryptjs, change required below to ('bcryptjs')
var bcrypt = require('bcrypt');
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('listening at port 8000');
})

