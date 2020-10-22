const mongoose = require('mongoose');

const loginModel = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    }
});
const LoginModel = mongoose.model('LoginModel', loginModel);

module.exports = LoginModel;