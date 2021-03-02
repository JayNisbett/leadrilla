const express = require('express');

const Lead = require('../models/leadsModel.js');
const { db } = require('../models/leadsModel.js');
const router = express.Router();

//Sign Up
router.post('/onboarding', async (req, res) => {
    try {
        const leadInfo = req.body;
        let errors = {};

        if (Object.keys(errors).length > 0) {
            res.json({ status: "404", error: error })
        } else {
            const newLead = new Lead({ leadInfo: leadInfo });
            // Generate the Salt
            if (err) return err;
            // Save the Lead
            newLead.save(function (err, result) {
                res.json({ status: "200", success: 'success', data: result, error: err });
            });

        }
    } catch (error) {
        console.log(error, "error")
    }

});

module.exports = router;
