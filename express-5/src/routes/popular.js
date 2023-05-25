const express = require('express');
let router = express.Router();
const popular = require('../controllers/popular');


router.get("/popular", popular);



module.exports = router;