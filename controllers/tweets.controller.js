const Tweet = require("../models/tweet.model");

module.exports.list = (req, res, next) => {
  Tweet.find()
    .then((tweets) => {
      res.render('tweets/list', { tweets });
    })
    .catch((error) => next(error))
}

module.exports.detail = (req, res, next) => {
  Tweet.findById(req.params.id) 
  .then((tweet) => {
    res.render('tweets/detail', { tweet: tweet })
  })
  .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
  Tweet.create
  res.render('tweets/new');
}

module.exports.doCreate = (req, res, next) => {
  Tweet.create(req.body)
    .then(() => {
      res.redirect("/tweets")
    })
}

module.exports.update = (req, res, next) => {
  Tweet.findById(req.params.id)
    .then((tweet) => {
      res.render("tweets/edit", { tweet })
    })
    .catch()
}