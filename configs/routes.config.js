const express = require('express');
const router = express.Router();

const common = require("../controllers/common.controller");
const tweets = require("../controllers/tweets.controller");

router.get('/', common.home);
router.get('/tweets', tweets.list);

module.exports = router;


