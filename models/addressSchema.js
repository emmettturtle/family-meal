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

addressSchema.methods.getAddressStr = function(){
    const addressStr = this.street + ', ' + this.city + ', ' + this.state + ' ' + this.zip;
    return addressStr;
}

module.exports = addressSchema;