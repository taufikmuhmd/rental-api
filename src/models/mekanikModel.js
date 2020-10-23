const mongoose = require('mongoose');

const mekanikModel = new mongoose.Schema ({
    namaMekanik: {
        type: String,
        required: true

    },
    staffLevel: {
        type: String,
        required: true
    },
    createdBy: String,
    createdAt: String
})

const MekanikModel = mongoose.model('MekanikModel', mekanikModel);

module.exports = MekanikModel;