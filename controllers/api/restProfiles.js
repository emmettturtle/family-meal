const RestProfile = require('../../models/restProfile');


module.exports = {
    create,
    getFeed
}

//package address
//
async function create(req, res) {
    const profile = await RestProfile.create({
        user: req.user._id,
        name: req.body.name,
        description: req.body.description,
        address: {
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city,
            state: req.body.state
        }
    });
    res.json(profile);
}

async function getFeed(req, res){
    try {
        const profile = await RestProfile.findOne({user: req.user._id});
        const feed = await profile.feed();
        console.log(feed)
        res.json(feed);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

}