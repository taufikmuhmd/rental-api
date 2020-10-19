const mongoose = require('mongoose');

const mekanikModel = new mongoose.Schema ({
    namaMekanik: {
        type: String,
        unique: true,
        required: true

    },
    id: {
        type: String
    }
})

const MekanikModel = mongoose.model('MekanikModel', mekanikModel);

module.exports = MekanikModel;