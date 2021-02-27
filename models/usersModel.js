const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
