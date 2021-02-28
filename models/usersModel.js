const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    // firstname: {
    //     type: String,
    // },
    // lastname: {
    //     type: String,
    // },
    // phone: {
    //     type: String,
    // },
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // password: { 
    //     type: String,
    // },
    // city: {
    //     type: String,
    // },
    // state: {
    //     type: String,
    // },
    // zip: {
    //     type: String,
    // },
    // industry: {
    //     type: String,
    // },
    // company: {
    //     type: String,
    // },
    // emailVerified: {
    //     type: Boolean,
    //     default: false
    // }
    userInfo: {
        type: Object
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
