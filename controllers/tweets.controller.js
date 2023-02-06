const Tweet = require("../models/tweet.model");
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  Tweet.find()
    .sort({ updatedAt: "desc" })
    .then((tweets) => {
      res.render('tweets/list', { tweets: tweets.reverse() });
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render('tweets/detail', { tweet })
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render('tweets/new')
}

module.exports.doCreate = (req, res, next) => {
  Tweet.create(req.body)
    .then(() => {
      res.redirect("/tweets")
    })
    .catch(err => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render('tweets/new', { errors: err.errors })
      } else {
        next(err)
      }
    })
}

module.exports.update = (req, res, next) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render("tweets/edit", { tweet })
    })
    .catch(next)
}

module.exports.doUpdate = (req, res, next) => {
  Tweet.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/tweets")
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Tweet.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/tweets")
    })
    .catch(next)
}