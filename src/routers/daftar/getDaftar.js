const express = require('express');
const { Daftar } = require('../../../models');

const router = express.Router();

router.get('/get-daftar', async (req, res) => {
    try {
        const daftar1 = await Daftar.find();
        res.send(daftar1);
    } catch(e) {
        res.send({message: e.message});
    } 
});

module.exports = router;