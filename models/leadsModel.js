const mongoose = require('mongoose');

const LeadsSchema = mongoose.Schema({
    leadInfo: {
        type: Object
    }
},
    {
        timestamps: true
    }
);

const Leads = mongoose.model('Leads', LeadsSchema)

module.exports = Leads;

