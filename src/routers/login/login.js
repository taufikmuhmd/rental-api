const express = require('express');
const { Login, Admin } = require('../../models');
const { schemaLogin } = require('../../schema');

const router = express.Router();


router.post('/login', async (req, res) => {
    
    try {
    const { value, error } = schemaLogin.validate(req.body);
    const { email, password } = value;
    if (error) {
        throw new Error (error.message);
    };
    let admin = await Admin.find({email, password})
    if (!admin) {
    throw new Error('Username / Password tidak valid')
    }

    const login = new Login ({
        email,
        password
    })

    res.send(login);
    }catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;
