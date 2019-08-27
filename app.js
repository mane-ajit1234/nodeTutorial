const express = require("express");
const path = require('path');
const app = express();
const fetch = require("node-fetch");
const blueBird = require("bluebird");
console.log(__dirname);
console.log(__filename);

app.set("view engine","hbs");

fetch.Promise = blueBird;


const publicDirPath = path.join(__dirname,"/public");


app.use(express.static(publicDirPath));



app.get('',(req, res) =>{
    res.send("Hello Express");
})

app.get('/weather',(req, res) =>{
    console.log('query string',req.query.age);
    res.render("index",{
        "title":"Weather App",
        "name":"Ajit Mane"
    });
});

app.get('*',(req, res) =>{
    res.render("404");
})

fetch("http://puzzle.mead.io/puzzle").then((response) =>{
    response.json().then((data) =>{
        console.log(data);
    })
})

app.listen(3000, () =>{
    console.log("Server started at Port 3000");
})