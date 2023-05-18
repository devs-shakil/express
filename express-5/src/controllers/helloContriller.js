
const Hello = (req, res) =>{
    res.status(200);
    res.json({
        "Name": "Shakil Hossain",
        "age": "24",
        "District" : "Lakshmipur"
    })
}

module.exports = Hello;