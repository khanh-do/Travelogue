let users = require('../controllers/users');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the user from the database and include their travelogue in the view page we will be rendering.
        users.index(req, res) ;
    })

    app.post('/login', function (req, res) {
        // console.log("#4 In routes post /login")
        users.login_user(req, res);
    })

    app.post('/create', function (req, res){
        // console.log("#4 In routes post /create")
        users.create_user(req, res);
    })

    app.get('/userInfo/:username', function (req, res){
        // console.log("#4 In routes get user", req.params.username);
        users.find_user(req, res);
    })

    app.put('/userInfo/:username', function (req, res) {
        console.log("#4 In routes with username: ", req.params);
        users.update_user(req, res);
    })
    
    app.put('/userInfo/:username/:lat/:lng', function (req, res) {
        console.log("#4 In routes with username and location coordinates: ", req.params.username, req.params.lat, req.params.lng);
        users.update_user_location(req, res);
    })

    // app.put('/userInfoAttraction/:username', function (req, res) {
    //     console.log("#4 In routes with username and location coordinates: ", req.params.username, req.body.coordinates, req.body.attractionToAdd);
    //     users.update_user_location(req, res);
    // })

}