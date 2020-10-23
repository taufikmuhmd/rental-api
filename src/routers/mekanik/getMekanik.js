const express = require('express');
const { Mekanik, Admin } = require('../../models');
const { verifyToken, getAdditionalData } = require('../../utils');


const router = express.Router();


router.get('/get-mekanik', verifyToken, async (req, res) => {
    try {
        const result = await Mekanik.find({});
        const promises = await Promise.all(result.map(async el => {
            return {
                namaMekanik: el.namaMekanik,
                staffLevel: el.staffLevel,
                jenisKendaraan: el.jenisKendaraan,
                createdBy: await getAdditionalData(el.createdBy, Admin),
                createdAt: el.createdAt
            }
        }));

        res.send(promises);
    } catch (e) {
        res.send({ message: e.message });
    }
});

module.exports = router;