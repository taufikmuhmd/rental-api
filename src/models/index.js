const { required } = require('joi');
const Daftar = require('./daftarModel');
const Mekanik = require('./mekanikModel');
const Admin = require('./adminModel');


module.exports = {
    Daftar,
    Mekanik,
    Admin
}