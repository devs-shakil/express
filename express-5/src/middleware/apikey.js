const jwt = require('jsonwebtoken');

exports.apikey = (req, res, next) =>{
    if(req.query.key != "123456789"){
        res.status(401);
        res.json({
            "msg" : "Invalid api key"
        })
    }else{
        next();
    }
}

exports.verifyToken = (req, res, next) =>{
    const token = req.headers["Authorization"];
    if(!token){
        return res.status(401).json({
            msg:"No token provided"
        })
    }
    jwt.verify(token, process.env.secrectKey, (err, decoded) => {
        if(err){
            return res.status(500).json({
                msg: "Failed to authenticate token"
            })
            req.user = decoded;
            next();
        }
    })

}