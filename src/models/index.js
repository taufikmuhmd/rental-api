const { required } = require('joi');
const Daftar = require('./daftarModel');
const Mekanik = require('./mekanikModel')
const Admin = require('./adminModel')
const Login = require('./loginModel')

module.exports = {
    Daftar,
    Mekanik,
    Admin,
    Login
}