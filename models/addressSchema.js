const Schema = require('mongoose').Schema;

const addressSchema = new Schema({
    street: {type: String},
    zip: {type: String},
    city: {type: String},
    state: {type: String}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

module.exports = addressSchema;