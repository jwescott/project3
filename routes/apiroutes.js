var passport = require("passport")
var axios = require("axios")
var db = require("../models")

function apiRoutes(app){
    app.post('/register', function (req, res){
        console.log(req.body)
        var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          })
          db.User.createUser(newUser, function (err, user){
              if (err) throw err;
              res.send(user).end()
          })
          app.post('/login',
          passport.authenticate('local'), 
          function (req, res){
              res.send(req.user);
          })
          app.get('/user', function(req, res){
              req.logout();
              res.send(null)
          })
    })
}

module.exports = apiRoutes
  
    
      
  
      