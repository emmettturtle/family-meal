const mongoose = require('mongoose');
const addressSchema = require('./addressSchema');
const Schema = mongoose.Schema;

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

//instance method for get feed
//

module.exports = mongoose.model('RestProfile', restProfile);