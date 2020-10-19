const express = require('express');
const mongoose = require('mongoose');
const { Mekanik, Daftar } = require('../../../models');
const { schemaMekanik } = require('../../schema');

const router = express.Router();

router.post('/mekanik-kerja', async ( req,res ) => {
    try {
        const { error, value } = schemaMekanik.validate(req.body);
        const {
            namaMekanik,
            id
        } = value;

        if (error) {
            throw new Error(error.message);
        };
        let daftar = await Daftar.findOne({
            _id: mongoose.Types.ObjectId(id)
        });
        if (!daftar) {
            throw new Error('Data tidak valid');
        }
        
        const mekanikKerja = new Mekanik ({
            namaMekanik,
            id
        });
        await mekanikKerja.save();
        res.send(mekanikKerja);
    } catch(e) {
        res.send({ message: e.message})
    }
});


module.exports = router;