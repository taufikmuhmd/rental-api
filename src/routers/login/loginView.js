const express = require('express');
const { Admin } = require('../../models');
const { schemaLogin } = require('../../schema');
const { compare, createToken } = require('../../utils');

const router = express.Router();

router.get('/', (req, res) => {
    const data = {
        layout: false
    }
    res.render('login', data);
});
router.post('/webLogin', async (req, res) => {
    try {
        const { value, error } = schemaLogin.validate(req.body);
        const { email, password } = value;
        if (error) {
            throw new Error(error.message);
        };
        let admin = await Admin.findOne({ email }).select('-__v');

        if (!admin) {
            throw new Error('Username / Password tidak valid')
        }
        const passFromDb = admin.password;
        const checkAdmin = compare(password, passFromDb);

        if (!checkAdmin) {
            throw new error('Username / password tidak valid');
        }
        const response = { ...admin._doc };
        delete response.password;

        const exp = 60 * 10;
        const token = createToken(response, exp);
        req.session.user = response;
        req.session.token = token;
    
        console.log(req.session);

        res.redirect('/dashboard')
    } catch (e) {
        res.redirect('/login')
    }
});


module.exports = router;