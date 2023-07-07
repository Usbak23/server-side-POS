const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./app/api/v1/auth/router');
const categoriesRouter = require('./app/api/v1/categories/router');
const barangRouter = require('./app/api/v1/barang/router');

const URL = `/api/v1`;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res)=>{
    res.json({message : 'welcome to api toko ABCD'})
});
app.use(`${URL}`, authRouter)
app.use(`${URL}`, UserRouter)
app.use(`${URL}`, categoriesRouter)
app.use(`${URL}`, barangRouter)

module.exports = app;
