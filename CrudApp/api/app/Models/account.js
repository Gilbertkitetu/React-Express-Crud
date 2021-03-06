const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accountSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
    collection: 'accounts'
})

module.exports = mongoose.model('Account', accountSchema)