const RestPost = require('../../models/restPost');
const RestProfile = require('../../models/restProfile');

module.exports = {
    create
}

//add profile creation
async function create(req, res) {
    req.body.user = req.user._id;
    const profile = await RestProfile.findOne({user: req.user._id});
    req.body.profile = profile;
    req.body.posted = Date.now();
    const post = await RestPost.create(req.body);
    res.json(post);
}