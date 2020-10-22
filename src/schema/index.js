const { required } = require("joi");

const schemaDaftar = require('./schemaDaftar');
const schemaMekanik = require('./schemaMekanik');
const schemaAdmin = require('./schemaAdmin');
const schemaLogin = require('./schemaLogin');

module.exports = {
    schemaDaftar,
    schemaMekanik,
    schemaAdmin,
    schemaLogin
}