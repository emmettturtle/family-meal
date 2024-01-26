const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restProfile = new Schema({
    // name, address, description, userID, signupDate, donation total
    name: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String},
    totalDonations: {type: Number, default:0},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true,
    toJSON: { virtuals: true } //allows virtuals to be sent to JSON
});

module.exports = mongoose.model('RestProfile', restProfile);