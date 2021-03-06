//users.js
var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/userModel');
const auth = require('../routes/auth');
const passport = require('passport');


router.get('/', auth.required, (req, res, next)=>{
   console.log("found user in session "+req.session.user);
   res.render('user', {
     user : req.session.user
   });
});

router.get('/login', auth.optional, (req, res, next)=>{
  res.render('login');
});

router.get('/logout', auth.optional, (req, res, next)=>{
  req.session.destroy(function(err){
    res.render('home');
  });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })
);

router.get('/register', auth.optional, (req, res, next)=>{
  res.render('register');
});

router.post('/register', auth.optional, (req, res, next)=>{
 console.log("posting "+req.body.email);
 User.findOne({'email': req.body.email}, (err, user) => {
     if (err){
       return res.send("Error!");
     }
     console.log(user);
     if (user){
       console.log("Found user - should not continue");
       return res.send("User Exists");
     }
     var data  = {
         email: req.body.email,
    }
    var user = new User();
    user.set(data);
    user.setPassword(req.body.password);
    user.save().then(()=>{
        if(err) {
          return next(err);
        }
        req.session.user = user;
        console.log("redirecting to user page");
        res.redirect('/users/');
    }).catch((err)=>{
      console.log(err);
    });
   });
});

router.use(function(err, req, res, next){
  console.error(err.stack);
});

module.exports = router;
