const express = require('express');
const { Daftar, Admin } = require('../../models');
const { verifyToken, getAdditionalData } = require('../../utils')

const router = express.Router();

router.get('/get-daftar', verifyToken, async (req, res) => {
    try {

        const result = await Daftar.find({});
        const prom = await Promise.all(result.map(async el => {
            return {
                pemilikKendaraan: el.pemilikKendaraan,
                serviceDetails: el.serviceDetails,
                jenisKendaraan: el.jenisKendaraan,
                noPolisi: el.noPolisi,
                idMekanik: el.idMekanik,
                createdBy: await getAdditionalData(el.createdBy, Admin),
                createdAt: el.createdAt
            }
        }));

        res.send(prom);


    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;