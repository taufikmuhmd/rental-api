const express = require('express');
const { Admin } = require('../../models');
const { schemaAdmin } = require('../../schema');

const router = express.Router();

router.post('/add-admin', async ( req,res ) => {
    try {
        const { value, error } = schemaAdmin.validate(req.body);
        const {
            namaAdmin,
            email,
            password
        } = value;
        if (error) {
            throw new Error(error.message);
        };
        
        const admin = new Admin ({
            namaAdmin,
            email,
            password
        });
        await admin.save();
        res.send(admin);
    } catch(e) {
        res.send({ message: e.message })
    }
});


module.exports = router;