const RestProfile = require('../../models/restProfile');

module.exports = {
    create
}

async function create(req, res) {
    req.body.user = req.user._id;
    const profile = await RestProfile.create(req.body);
    res.json(profile);
}