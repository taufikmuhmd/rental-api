const Joi = require('joi');

const mekanikSchema = Joi.object({
    namaMekanik: Joi.string()
        .min(3)
        .max(50)
        .required(),
    id: Joi.string()
        .required()

    })

module.exports = mekanikSchema;