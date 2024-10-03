// we need a template engine to make dynamic page like ejs and a views folder

const express = require('express');
const path = require('path');
const app = express();
const port  = 5000;

const publicPath = path.join(__dirname, 'public') 
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    let arr=[
        {
        id:1,
        name:"abc"
        },
        {
            id:2,
            name:"bcd"
        },
        {
            id:3,
            name:"4"
        }

]
    let user = {
        name:"abc",
        email:"abc@example.com",
        subject:['fullstack','frontend','backend']
    }
    res.render('profile',arr)
})
app.get('/*', (req, res) => {
    res.send("Page not found")
})


app.listen(port,()=>{
    console.log('listening on port ',port)
});