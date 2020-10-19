const tampilDaftar = require('./daftar');
const tampilMekanik = require('./mekanik');

const routers = [
    ...tampilDaftar,
    ...tampilMekanik
];

const router = (arg) => {
    arg.use(routers);
};

module.exports = router;