const express = require('express');
const { Daftar } = require('../../../models');
const { schemaDaftar } = require('../../schema');

const router = express.Router();

router.post('/daftar-bengkel', async (req,res) => {
    try {
        const { error, value } = schemaDaftar.validate(req.body);
        const {
            pemilikKendaraan,
            serviceDetails,
            jenisKendaraan,
            noPolisi
        } = value;

        if (error) {
            throw new Error (error.message);
        };
        const daftar = new Daftar({
            pemilikKendaraan,
            serviceDetails,
            jenisKendaraan,
            noPolisi
        });
        await daftar.save();
        res.send(daftar);
    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;
