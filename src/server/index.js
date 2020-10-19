const express = require('express');
const mongoose = require('mongoose');

const { host, port} = require('../../config');
const router = require('../routers');
const dbConnect = require('../connection/dbconnect');

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
dbConnect(mongoose);
router(app);

app.listen( port, () => console.log(`Server running at http://${host}:${port}`));
