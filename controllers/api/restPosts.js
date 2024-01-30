const RestPost = require('../../models/restPost');

module.exports = {
    create
}

async function create(req, res) {
    req.body.user = req.user._id;
    const profile = await RestPost.create(req.body);
    res.json(profile);
}