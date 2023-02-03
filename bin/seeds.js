require('../configs/db.config');

const Tweet = require('../models/tweet.model');

Tweet.deleteMany()
  .then(() => {
    for (let i = 1; i <= 100; i++) {
      Tweet.create({
        user: `User00${i}`,
        message: `This is tweet number  ${i}`,
      })
      .then(() => console.log(`Tweeet number ${i} created`) )
      .catch((error) => console.error(error))
    }
  })