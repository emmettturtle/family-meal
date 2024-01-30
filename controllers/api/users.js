const User = require('../../models/user')
const RestProfile = require('../../models/restProfile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


module.exports = {
    create,
    login,
    checkToken,
    getProfile
}


async function create(req, res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user);
        res.json(token);
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function login(req, res){
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) throw new Error('Invalid Credentials')
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw new Error('Invalid Credentials')
        const token = createJWT(user)
        res.json(token)
    } catch (err){
        res.status(400).json(err);
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}

//once creating community member functionality this will have to be changed to check both the 
//rest profiles and member profiles
async function getProfile(req, res) {
    const profile = await RestProfile.findOne({user: req.user._id});
    res.json(profile);
}



/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}