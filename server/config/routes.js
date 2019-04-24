var quotes = require('../controllers/users');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the user from the database and include their travelogue in the view page we will be rendering.
        users.index(req, res) ;
    })

    // Below is example of post method
    // app.post('/btquote', function (req, res) {
    //     quotes.btquote(req, res);
    // })
}