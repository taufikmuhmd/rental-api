const express = require('express');
const { Mekanik, Daftar } = require('../../../models');

const router = express.Router();


const getData = async (id, model) => {
    const result = await model.findById(id).select('-password')
    return result
};

router.get('/get-mekanik', async (req, res) => {
    try {
        const result = await Daftar.find({});
        const promises = await Promise.all(result.map(async el =>{
        return {
            pemilikKendaraan: el.pemilikKendaraan,
            serviceDetails: el.serviceDetails,
            jenisKendaraan: el.jenisKendaraan,
            noPolis: el.noPolis,
            namaMekanik: await getData(el.namaMekanik, Mekanik),
            idMekanik: await getData(el.idMekanik, Mekanik)
        }
        }));

        res.send(promises);
    } catch(e) {
        res.send({message: e.message});
    } 
});

module.exports = router;