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
    namaMekanik: {
        type: String,
        required: true
    }
});
const DaftarModel = mongoose.model('DaftarModel', daftarModel);

module.exports = DaftarModel;