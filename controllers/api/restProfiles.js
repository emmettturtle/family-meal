const RestProfile = require('../../models/restProfile');


module.exports = {
    create
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