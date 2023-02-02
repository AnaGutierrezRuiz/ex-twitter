const { Router } = require('express');
const express = require('express');
const router = express.Router();

const common = require("../controllers/common.controller");
const tweets = require("../controllers/tweets.controller");

router.get('/', common.home);

// CRUD

router.get('/tweets', tweets.list); // READ 1 of 2
router.get('/tweet/new', tweets.create) // CREATE 1 of 2
// router.post('/tweets', tweets.doCreate) // CREATE 2 of 2
router.get('/tweets/:id', tweets.detail) // READ 2 of 2
// router.post('/tweets/:id/update', tweets.update) // UPDATE 1 of 2
// router.post('/tweets/:id', tweets.doUpdate) // UPDATE 2 of 2
// router.post('/tweets/:id/delete', tweets.delete) // DELETE










module.exports = router;


