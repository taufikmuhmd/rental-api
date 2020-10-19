const express = require('express');
const { Mekanik } = require('../../../models');
const { schemaMekanik } = require('../../schema');

const router = express.Router();

router.post('/mekanik-kerja', async ( req,res ) => {
    try {
        const { error, value } = schemaMekanik.validate(req.body);
        const {
            namaMekanik,
            staffLevel
        } = value;

        if (error) {
            throw new Error(error.message);
        };

        
        const mekanikKerja = new Mekanik ({
            namaMekanik,
            staffLevel
        });
        await mekanikKerja.save();
        res.send(mekanikKerja);
    } catch(e) {
        res.send({ message: e.message})
    }
});


module.exports = router;