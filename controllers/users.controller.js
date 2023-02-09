const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

module.exports.create = (req, res, next) => {
  res.render('users/new');
};

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => {
        res.redirect('/tweets');
    })
    .catch(next)
};

module.exports.doCreate = (req, res, next) => {
  // if (!req.body.password){
  //   return res.render("users/new", {
  //     errors: {password: {message: "can't be blank" }},
  //     user: req.body,
  //   });
  // }
      User.create(req.body)
        .then(() =>{
        res.redirect("/login");
      })
        .catch(err => {
          if(err instanceof mongoose.Error.ValidationError) {
            res.render("users/new", { errors: err.errors, user: req.body});
          } else {
            next(err);
          }
        })
};

module.exports.login = (req, res, next) => {
  res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {
  User.findOne({email: req.body.email})
  .then((user) => {
    bcrypt
    .compare(req.body.password, user.password)
    .then((ok) => {
      if (ok){
        req.session.userId = user.id;
        res.redirec('/tweets');
      }
    })
  })
}