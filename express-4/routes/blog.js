const express = require('express');
let blog = express.Router();

blog.get('/blog', (req, res, next)=>{
    res.send('Hello this is blog page');
})

module.exports = blog;