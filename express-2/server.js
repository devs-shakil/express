const express = require('express');
const app = express();
app.use(express.static('public'));
//
// const validateUser = (req, res , next) =>{
//     res.locals.validated = true;
//     console.log("1"+" validate run");
//     next();
// };
// app.use('/admin', validateUser);
// app.get('/', (req, res, next) =>{
//     res.send("<h3>2 Hello this is main page</h3>")
//     console.log("3"+res.locals.validated)
// });
// app.get('/admin',(req, res, next)=>{
//     res.send("admin page");
//     console.log(res.locals.validated)
// })
app.get('/', (req, res)=>{
    res.send("this is home page")
    res.cookie("country", "Bangladesh");
    res.cookie("name", "pakistan");
    res.redirect('/qatar');

});
app.get('/qatar', (req, res)=>{
    res.json({
        "city":"Doha",
        "name" :"hasan",
        "phone":"01457112"
    })
})



app.listen(8000, ()=>{
    console.log("server is running with nodemon")
});