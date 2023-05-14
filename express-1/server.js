const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
    console.log(path.join(__dirname + '/public/index.html'))
})


app.listen(port, ()=>{
    console.log("server is run")
})