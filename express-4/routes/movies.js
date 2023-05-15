const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

const requiredJSON = (req, res, next)=>{
    if(!req.is('application/json')){
        res.json({
            msg: "content type must be application/json"
        })
    }else{
        next()
    }
}



router.get('/popular', (req,res,next)=>{
    let page = req.query.page;
    if(page == undefined){
        page = 1;
    }
    let  results = movies.filter(movie => {
        return movie.most_popular == false
    })
    const indexToStart = (page - 1) * 20;
    results = results.slice(indexToStart, indexToStart + 18);
    console.log(results.length)
    res.json({
        page,
        results
    })
})

module.exports = router;