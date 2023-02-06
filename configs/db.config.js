const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ih-twitter"

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.info(`Application SSSSSuccessfully connected to database ${MONGODB_URI}`)
  })
  .catch((error) => console.error(error));