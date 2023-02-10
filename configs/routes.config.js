const { Router } = require('express');
const express = require('express');
const { create } = require('hbs');
const router = express.Router();

const common = require("../controllers/common.controller");
const tweets = require("../controllers/tweets.controller");
const users = require("../controllers/users.controller");

router.get('/', common.home);

// tweets CRUD

router.get('/tweets', tweets.list); // READ 1 of 2
router.get('/tweets/new', tweets.create) // CREATE 1 of 2
router.post('/tweets', tweets.doCreate) // CREATE 2 of 2
router.get('/tweets/:id', tweets.detail) // READ 2 of 2
router.get('/tweets/:id/update', tweets.update) // UPDATE 1 of 2
router.post('/tweets/:id', tweets.doUpdate) // UPDATE 2 of 2
router.post('/tweets/:id/delete', tweets.delete) // DELETE

// users CRUD

router.get('/users/new', users.create);
router.post('/users', users.doCreate);

router.get('/users/new', users.create);
router.post('/users', users.doCreate);
router.get('/login', users.login);
router.post('/login', users.doLogin);

module.exports = router;
