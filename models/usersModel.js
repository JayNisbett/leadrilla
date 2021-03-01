const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userInfo: {
        type: Object
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
