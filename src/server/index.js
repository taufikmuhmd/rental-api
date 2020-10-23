const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const { host, port} = require('../../config');
const router = require('../routers');
const dbConnect = require('../connection/dbconnect');
const { Session } = require('inspector');

const viewPath = path.join(__dirname, '../views');

const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
dbConnect(mongoose);

const sessionConfig = {
    secret: 'rahasia',
    name: 'web',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 7200,
        sameSite: true
    }
};

app.use(cookieParser(sessionConfig.secret));
app.use(session(sessionConfig));

app.engine('hbs', hbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', viewPath);

app.use((req, res, next) => {
    const { user, token} = req.session;
    if(user) {
        res.locals.user = user;
    }
    if (token) {
        res.locals.token = token;
    }
    next();
})

router(app);

app.listen( port, () => console.log(`Server running at http://${host}:${port}`));
