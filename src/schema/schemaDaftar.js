const Joi = require('joi');

const daftarSchema = Joi.object({
    pemilikKendaraan: Joi.string()
        .min(3)
        .max(50)
        .required(),
    serviceDetails: Joi.string()
        .required(),
    jenisKendaraan: Joi.string()
        .required(),
    noPolisi: Joi.string()
        .required(),
    idMekanik: Joi.string()
        .required()
})

module.exports = daftarSchema;