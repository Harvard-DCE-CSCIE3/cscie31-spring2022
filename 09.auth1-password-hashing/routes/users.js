//users.js
var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/userModel');
const auth = require('../routes/auth');

router.get('/', auth.required, (req, res, next)=>{
   console.log("found user in session "+req.session.user);
   res.render('user', {
     user : req.session.user
   });
});

router.get('/logout', auth.optional, (req, res, next)=>{
  req.session.destroy(function(err){
    res.render('home');
  });
});

router.get('/register', auth.optional, (req, res, next)=>{
  res.render('register');
});

router.post('/register', auth.optional, (req, res, next)=>{
 console.log("posting "+req.body.email);

 // let's check to see if this user exists
 User.findOne({'email': req.body.email}, (err, user) => {
     if (err){
       return res.send("Error!");
     }
     console.log(user);
     // if the user exists, stop here 
     // (This isn't a proper way to message this to a user, but
     //  only illustrates how we would test for this condition)
     if (user){
       console.log("Found user - should not continue");
       return res.send("User Exists");
     }
    // Having established that we have a new user, let's 
    //  proceed to create that record
    var data  = {
         email: req.body.email,
    }
    var newUser = new User();
    newUser.set(data);
    newUser.setPassword(req.body.password);
    newUser.save().then(()=>{
        if(err) {
          return next(err);
        }
        req.session.user = newUser;
        console.log("redirecting to user page");
        res.redirect('/');
    }).catch((err)=>{
      console.log(err);
    });
   });
});

router.use(function(err, req, res, next){
  console.error(err.stack);
});

module.exports = router;
