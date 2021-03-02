const express = require('express');

const Lead = require('../models/leadsModel.js');
const User = require('../models/usersModel.js')
const { db } = require('../models/leadsModel.js');
const router = express.Router();

//Onboarding Save
router.post('/onboarding', async (req, res) => {
    try {
        const leadInfo = req.body.leadData;
        let errors = {};

        //////
        const filter = { 'id': leadInfo.userId }
        const update = { 'userInfo.onboarded': true }
        if (Object.keys(errors).length > 0) {
            res.json({ status: "404", error: error })
        } else {
            const newLead = new Lead({ leadInfo: leadInfo });
            // Save the Lead

            newLead.save(function (err, result) {
                User.findById(leadInfo.userId, function (err, user) {
                    if (!err && user) {
                        user.userInfo = { ...user.userInfo, onboarded: true }
                        user.save((err, result) => {
                            res.json({ status: "200", success: 'success', data: result, error: err });
                        })
                    }
                });
            });

        }
    } catch (error) {
        console.log(error, "error")
    }

});

module.exports = router;

// support pin: 41963676
// server: Runway 1 VPS