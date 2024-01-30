const express = require('express');
const router = express.Router();
const restPostsCtrl = require('../../controllers/api/restPosts');

//path /api/rest-post

router.post('/', restPostsCtrl.create);

module.exports = router;