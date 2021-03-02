const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel.js');
const config = require('../config');
const router = express.Router();

const checkUserUniqueness = (field, value) => {
    return { error, isUnique } = User.findOne({ [field]: value }).exec()
        .then(user => {
            let res = {};
            if (Boolean(user)) {
                res = { error: { [field]: "This " + field + " is not available" }, isUnique: false };
            } else {
                res = { error: { [field]: "" }, isUnique: true };
            }
            return res;
        })
        .catch(err => console.log(err))
}

//Sign Up
router.post('/signup', async (req, res) => {
    try {
        const userInfo = req.body;
        delete userInfo.confirmPassword;
        let errors = {};

        Object.keys(userInfo).forEach(async field => {
            if (field === 'email') {
                const value = userInfo[field];
                const { error, isUnique } = await checkUserUniqueness(field, value);
                if (!isUnique) {
                    errors = { ...errors, ...error };
                }
            }
        });

        if (Object.keys(errors).length > 0) {
            res.json({ status: "404", error: error })
        } else {
            const newUser = new User({ userInfo: userInfo });
            // Generate the Salt
            bcrypt.genSalt(10, (err, salt) => {
                if (err) return err;
                // Create the hashed password
                bcrypt.hash(newUser.userInfo.password, salt, (err, hash) => {
                    if (err) return err;
                    newUser.userInfo.password = hash;
                    console.log(newUser.userInfo.password, "newUser")
                    // Save the User
                    newUser.save(function (err, result) {
                        res.json({ status: "200", success: 'success', data: result, error: err });
                    });
                });
            });

        }
    } catch (error) {
        console.log(error, "error")
    }

});


router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        User.findOne({ "userInfo.email": email }, (err, user) => {
            if (err) throw err;
            if (Boolean(user)) {
                // Match Password 
                bcrypt.compare(password, user.userInfo.password, (err, isMatch) => {
                    if (err) return err;
                    if (isMatch) {
                        const token = jwt.sign({
                            id: user.id,
                            email: user.userInfo.email
                        }, config.jwtSecret);
                        res.json({ token, success: 'success', user: { ...user.userInfo, id: user.id } })
                    } else {
                        res.json({ error: { invalidCredentials: 'Invalid Email address or Password' } });
                    }
                });
            } else {
                res.json({ error: { invalidCredentials: 'Invalid Email address or Password' } });
            }
        });
    } catch (error) {
        console.log(error, "error")
    }
});

module.exports = router;
