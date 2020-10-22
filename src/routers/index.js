const tampilDaftar = require('./daftar');
const tampilMekanik = require('./mekanik');
const tampilAdmin = require('./admin')
const tampilLogin = require('./login')


const routers = [
    ...tampilDaftar,
    ...tampilMekanik,
    ...tampilAdmin,
    ...tampilLogin
];

const router = (arg) => {
    arg.use(routers);
};

module.exports = router;