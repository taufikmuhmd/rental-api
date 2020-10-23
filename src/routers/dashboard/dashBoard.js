const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res) =>{
    const { user } = res.locals;
    const data = {
        user,
        layout: false
    };
    res.render('dashboard', data);

})


module.exports = router;