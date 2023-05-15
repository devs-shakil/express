const express = require('express');
let home = express.Router();




home.get('/', (req, res)=>{
    res.send('Hello This is Home page');
});

module.exports = home;