const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./commentSchema')

const restPost = new Schema({
    // description, likes, location, post time, donation value, rsvp total, comments, rsvp list
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    description: {type: String},
    location: {type: String},
    posted: {type: Date},
    time: {type: Date},
    donationValue: {type: Number},
    rsvpTotal: {type: Number},
    rsvpList: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [commentSchema]
}, {
    timestamps: true,
    toJSON: { virtuals: true } //allows virtuals to be sent to JSON
});

module.exports = mongoose.model('RestPost', restPost);