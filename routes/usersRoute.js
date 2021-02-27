const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel.js');
const config = require('../config');
const { db } = require('../models/usersModel.js'); 
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
        const firstname = req.body.firstName || '';
        const lastname = req.body.lastName || '';
        const phone = req.body.phone || '';
        const email = req.body.email || '';
        const password = req.body.password || '';

        const reqBody = { firstname, lastname, phone, email, password };
        let errors = {};

        Object.keys(reqBody).forEach(async field => {
            if (reqBody[field] === '') {
                errors = { ...errors, [field]: 'This field is required' }
            }
            if (field === 'email') {
                const value = reqBody[field];
                const { error, isUnique } = await checkUserUniqueness(field, value);
                if (!isUnique) {
                    errors = { ...errors, ...error };
                }
            }
        });

        if (Object.keys(errors).length > 0) {
            res.json({ status: "404", error: error })
        } else {
            const newUser = new User({
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                email: email,
                password: password
            });

            // Generate the Salt
            bcrypt.genSalt(10, (err, salt) => {
                if (err) return err;
                // Create the hashed password
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) return err;
                    newUser.password = hash;
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
        const email = req.body.email || '';
        const password = req.body.password || '';
        let errors = {};
        
        if (Object.keys(errors).length > 0) {
            res.json({ errors });
        } else {
            User.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                if (Boolean(user)) {
                    // Match Password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) return err;
                        if (isMatch) {  
                            const token = jwt.sign({
                                    id: user.id,
                                    email: user.email
                            }, config.jwtSecret); 
                            res.json({ token, success: 'success' })
                        } else {
                           res.json({ errors: { invalidCredentials: 'Invalid Email address or Password' } });
                        }
                    });
                } else {
                    res.json({ errors: { invalidCredentials: 'Invalid Email address or Password' } });
                }
            });
        }
    } catch (error) {
        console.log(error, "error")
    }
});

module.exports = router;
