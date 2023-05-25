const express = require('express');
const {login} = require("../controllers/login");
const app = express();
const router = app.Router();


router.get('/login', login)