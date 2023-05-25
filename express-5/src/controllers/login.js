
const jwt = require("jsonwebtoken");


exports.login = (req, res) =>{
    const user = {
        "id" :"1",
        "username" : "shakil"
    }
    const token = jwt.sign(user, process.env.secrectKey, {expiresIn : "1h"})
    res.json({token})
};