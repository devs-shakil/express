const express = require('express');
const app = express();

const popularRoute = require('./src/routes/popular');
const login = require('./src/routes/login')

const helmet = require('helmet');



app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());



app.use(popularRoute)
app.use(login)
module.exports = app;