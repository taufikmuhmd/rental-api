const express = require('express');
const { Mekanik } = require('../../models');
const { schemaMekanik } = require('../../schema');
const { checkToken, verifyToken } = require('../../utils')

const router = express.Router();

router.post('/mekanik-kerja', verifyToken, async (req, res) => {

    try {
        // const userData = await checkToken(req.body.token);
        // if(userData.error){
        //     throw new Error(userData.message)
        // }
        // delete req.body.token;
        const { error, value } = schemaMekanik.validate(req.body);
        const {
            namaMekanik,
            staffLevel
        } = value;

        if (error) {
            throw new Error(error.message);
        };


        const mekanikKerja = new Mekanik({
            namaMekanik,
            staffLevel,
            createdBy: req.headers.decoded.data._id,
            createdAt: new Date()
        });
        await mekanikKerja.save();
        res.send(mekanikKerja);
    } catch (e) {
        res.send({ message: e.message })
    }
});


module.exports = router;