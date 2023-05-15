const express = require('express');
let router = express.Router();

router.get('/',(req, res,next)=>{
    res.json({
        "name": "shakil",
        "age":"25",
        "phone":"545454"
    })
    next();
})

module.exports = router;