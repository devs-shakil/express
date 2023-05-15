const express = require('express');
const helmet = require('helmet');
const app = express();
require('dotenv').config();
const home = require('./routes/home');
const blog = require('./routes/blog');
const movies = require('./routes/movies')


const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

app.use((req, res, next)=>{
    if(req.query.key != "123456"){
        res.status(401);
        res.json({
            msg: "Invalied api key"
        })
    }else{
        next();
    }
})


app.use('/', home);
app.use('/', blog);
app.use('/', movies)


app.listen(8000, ()=>{
    console.log("app is succesfully run "+port)
})