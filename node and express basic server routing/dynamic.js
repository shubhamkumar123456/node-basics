const express = require('express');
const app = express();
const port  = 5001;
const path = require('path');
const publicPath  = path.join(__dirname, 'public');

app.set("view engine",'ejs');

app.get('/', function(req, res){
    let obj = {
        name:"abc",
        age:12,
        course:"fullstack"
    }

    res.render('index.ejs',{obj})  //the index file is inside view folder u can send any data by making {}

})
app.get('/about', async function(req, res){
 
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=2921c02e6b52bf9f68c52a6d48627824');
    const data = await response.json();
    console.log(data);

    res.render('about',{data})  //the about file is inside view folder

})
app.get('/contact', function(req, res){
    let arr= [
        {id:1,name:"abc",email:"abc@example.com"},
        {id:2,name:"bcd",email:"bcd@example"},
        {id:3,name:"efg",email:"efg@gmail.com"},
    ]

    res.render('contact',{arr})  //the contact file is inside view folder

})




app.listen(port,()=>{
    console.log('listening on port ',port)
});

