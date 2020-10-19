const { required } = require("joi");

const schemaDaftar = require('./schemaDaftar');
const schemaMekanik = require('./schemaMekanik');

module.exports = {
    schemaDaftar,
    schemaMekanik
}