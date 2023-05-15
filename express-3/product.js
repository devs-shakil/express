const express = require('express');
let productRouter = express.Router();

productRouter.get('/',(req, res, next)=>{
    res.send("this is product page");
})
module.exports = productRouter;