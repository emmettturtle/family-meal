const mongoose = require('mongoose');
const addressSchema = require('./addressSchema');
const Schema = mongoose.Schema;

const RestPost = require('./restPost');

const restProfile = new Schema({
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

//instance method for get feed:
//iterate through posts
//get the address of this profile
//get posts and itterate
//get the address of the post user
//convert both to URI
//run API, origin is user address, destination is post address
//if distance is less than 50 km add to feed
restProfile.methods.feed = async function(){
    let feed = [];
    let userAddress = this.address.street + ', ' + this.address.city + ', ' + this.address.state + ' ' + this.address.zip;
    const allPosts = await RestPost.find({});

    allPosts.forEach(function(post){
        let postAddress = post.profile.address;
        let postAddressStr = postAddress.street + ', ' + postAddress.city + ', ' + postAddress.state + ' ' + postAddress.zip;
        let distance = findDistance(userAddress, postAddressStr);

        if (distance < 50000){
            feed.push(post);
        }
    });

    return feed;
}

//API KEY: AIzaSyCwX6U4uK-hbz7_A7ekpa9xtVeqtyqkeNo

async function findDistance(pointA, pointB){
    // URI the values
    // run the API call
    // return the distance in meters
    const API_KEY = 'AIzaSyCwX6U4uK-hbz7_A7ekpa9xtVeqtyqkeNo';
    let pointAURI = encodeURI(pointA);
    let pointBURI = encodeURI(pointB);
    let distance = 0;
    try{
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/distancematrix/json
                ?destinations=${pointAURI}
                &origins=${pointBURI}
                &key=${API_KEY}`
        );
        const row = res.rows[0];
        distance = row.elements[0].distance.value;
    } catch (err) {
        console.log(err);
    }
    
    return distance;    
}

module.exports = mongoose.model('RestProfile', restProfile);