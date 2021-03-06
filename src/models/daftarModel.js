const mongoose = require('mongoose');

const daftarModel = new mongoose.Schema({
    pemilikKendaraan: {
        type: String
    },

    serviceDetails: {
        type: String
    
    },
    jenisKendaraan: {
        type: String

    },
    noPolisi: {
        type: String,
        unique: true,
        required: true
    },
    
    idMekanik: {
        type: String,
        required: true,
        unique: true
    },
    reatedBy: String,
    createdAt: String
});
const DaftarModel = mongoose.model('DaftarModel', daftarModel);

module.exports = DaftarModel;