const express = require('express');
const mongoose = require('mongoose')
const { Daftar, Mekanik } = require('../../../models');
const { schemaDaftar, schemaMekanik } = require('../../schema');
const router = express.Router();


router.post('/daftar-bengkel', async (req,res) => {
    try {
        const { error, value } = schemaDaftar.validate(req.body);
        const {
            pemilikKendaraan,
            serviceDetails,
            jenisKendaraan,
            noPolisi,
            idMekanik
        } = value;

        if (error) {
            throw new Error (error.message);
        };

        let mekanik = await Mekanik.findOne({
            _id: mongoose.Types.ObjectId(idMekanik)
        });

        if (!mekanik) {
            throw new Error('Data tidak valid');
        }

        const daftar = new Daftar({
            pemilikKendaraan,
            serviceDetails,
            jenisKendaraan,
            noPolisi,
            idMekanik
        });
        await daftar.save();
        
        res.send(daftar);
    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;
