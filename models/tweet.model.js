const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetSchema = new Schema ({
  user: {
    type: "String",
    required: "A user is required"
  },
  message: {
    type: "String",
    required: "A message is required"
  },
  createdAt: {
    type: "String",
    required: "A date is required"
  },
  fav: {
    required: false
  }
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;