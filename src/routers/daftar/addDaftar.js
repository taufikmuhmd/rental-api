const express = require('express');
const mongoose = require('mongoose')
const { Daftar, Mekanik } = require('../../models');
const { schemaDaftar, schemaMekanik } = require('../../schema');
const { verifyToken } = require('../../utils');
const router = express.Router();


router.post('/daftar-bengkel', verifyToken, async (req, res) => {
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
            throw new Error(error.message);
        }

        const daftar = new Daftar({
            pemilikKendaraan,
            serviceDetails,
            jenisKendaraan,
            noPolisi,
            idMekanik,
            createdBy: req.headers.decoded.data._id,
            createdAt: new Date()
        });
        await daftar.save();
        res.send(daftar);
    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;
