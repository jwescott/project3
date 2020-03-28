var passport = require("passport")
var axios = require("axios")
var db = require("../models")

function apiRoutes(app) {

    app.post("/api/stocks",function(req,res){
        db.StockHistory.create(req.body).then(function(data){
            res.json(data)
        })
    })
    app.post('/register', function (req, res) {
        console.log(req.body)
        var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        })



        // Endpoint to login
        app.post('/login',
            passport.authenticate('local'),
            function (req, res) {
                res.send(req.user);
            }
        );

        // Endpoint to get current user
        app.get('/user', function (req, res) {
            res.send(req.user);
        })


        // Endpoint to logout
        app.get('/logout', function (req, res) {
            req.logout();
            res.send(null)
        });
    })
}

module.exports = apiRoutes




