const mongoose = require('mongoose');
const addressSchema = require('./addressSchema');
const Schema = mongoose.Schema;

const {Client} = require('@googlemaps/google-maps-services-js');
const RestPost = require('./restPost');

const restProfileSchema = new Schema({
    // name, address, description, userID, signupDate, donation total
    name: {type: String, required: true},
    description: {type: String},
    totalDonations: {type: Number, default:0},
    address: addressSchema,
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true,
    toJSON: { virtuals: true } //allows virtuals to be sent to JSON
});

restProfileSchema.statics.findProfile = function(profileId) {

}

//instance method for get feed:
//iterate through posts
//get the address of this profile
//get posts and itterate
//get the address of the post user
//convert both to URI
//run API, origin is user address, destination is post address
//if distance is less than 50 km add to feed
restProfileSchema.methods.feed = async function(){
    let feed = [];
    let userAddress = this.address.getAddressStr();
    const allPosts = await RestPost.find({}).populate('profile');
    let postAddresses = [];
    allPosts.forEach(async function(post){
        postAddresses.push(post.profile.address.getAddressStr());
    });

    const response = await findDistances([userAddress], postAddresses);
    response.forEach(function(postUserDistance, idx) {
        if (postUserDistance.distance.value < 50000) {
            feed.push(allPosts[idx]);
        }
    });

    return feed;
    
}


async function findDistances(origin, destinations){
    try{
        const client = new Client({});
        const res = await client.distancematrix({
            params: {
                key: process.env.API_KEY,
                destinations: destinations,
                origins: origin
            },
            timeout: 1000
        })
        return res.data.rows[0].elements;
    } catch (err) {
        console.log('LOGGING ERROR')
        console.log(err);
    }

}

module.exports = mongoose.model('RestProfile', restProfileSchema);