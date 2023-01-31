const Tweet = require("../models/tweet.model");

module.exports.list = (req, res, next) => {
  res.render('tweets/list');
}