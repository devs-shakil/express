const express = require('express');
const Hello = require("../controllers/helloContriller");
const router = express.Router();
router.get('/info', Hello);

module.exports = router;