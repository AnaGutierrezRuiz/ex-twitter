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
    type: "Date",
    default: Date.now
    
  },
  likes: {
    type: Number,
    default: 0
  }
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;