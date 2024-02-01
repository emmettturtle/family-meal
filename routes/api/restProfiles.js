const express = require('express');
const router = express.Router();
const restProfilesCtrl = require('../../controllers/api/restProfiles');

//path /api/rest-profiles

router.post('/', restProfilesCtrl.create);
router.get('/feed', restProfilesCtrl.getFeed);

module.exports = router;